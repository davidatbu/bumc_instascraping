from contextlib import contextmanager
import time
from typing_extensions import ParamSpec
from dnips.web import ThreadedRateLimiter
from random import choice, randint
from dataclasses import dataclass
import json
from pathlib import Path
from pprint import pformat
import re
from typing import (
    Any,
    Callable,
    Dict,
    Generic,
    Iterator,
    List,
    Mapping,
    NamedTuple,
    Optional,
    Tuple,
    TypeVar,
    Union,
)
from urllib.parse import SplitResult, urlencode, urljoin, urlsplit, urlunsplit

from bs4 import BeautifulSoup as Soup
from cachecontrol import CacheControl
import dill
from pydantic import BaseModel as Bm
from pydantic.generics import GenericModel as Gm
from requests import ConnectionError
import requests
from requests.sessions import Session
import typer
from typer import Argument
from typer.params import Option

app = typer.Typer()


ElAttrs = Dict[str, Any]
Script = Tuple[ElAttrs, str]

_T = TypeVar("_T")


class NodeContainer(Gm, Generic[_T]):
    node: _T


class SubGraph(Gm, Generic[_T]):
    edges: List[NodeContainer[_T]]


class Dimensions(Bm):
    height: int
    width: int


class CaptionNode(Bm):
    text: str


class MainNode(Bm):
    __typename: str
    id: str
    is_video: bool
    edge_media_to_caption: SubGraph[CaptionNode]
    shortcode: str

    @classmethod
    def silence_pyright(cls):
        cls.__typename


class PageInfo(Bm):
    has_next_page: bool
    end_cursor: Optional[str] = None


class MediaNode(SubGraph[MainNode]):
    count: int
    page_info: PageInfo


class UserNode(Bm):
    edge_owner_to_timeline_media: MediaNode


def _extract_script_els(
    sp: Soup,
    base_url: str,
    tolerate_no_internet: bool,
    session: Session,
    headers: Optional[Mapping[str, str]] = None,
) -> Optional[List[Script]]:
    script_els = sp.find_all("script")

    to_write: List[Tuple[Dict[str, Any], str]] = []

    for el in script_els:
        if "src" in el.attrs:  # A link to JS
            js_link = urljoin(base_url, el["src"])
            text = None
            resp = None
            # print(f"fetching {js_link}")
            try:
                resp = session.get(js_link, headers=headers)
                text = resp.text
                if resp.status_code != 200:
                    raise RuntimeError(f"Got response code: {resp.status_code}")
            except ConnectionError as e:
                print(
                    f"I think you're not connected to internet. {js_link} failed with {e}"
                )
                if text == None:
                    text = str(e)
                if tolerate_no_internet:
                    to_write.append((el.attrs, text))
                else:
                    return
            else:
                to_write.append((el.attrs, text))
        else:
            if len(el_children := list(el.children)) != 1:
                print(
                    f"Found NOT ONE but {len(el_children)} children of <script> tag."
                    f"The attributes of the tag were {pformat(el.attrs)}"
                )
                return
            else:
                text = str(el_children[0])
                to_write.append((el.attrs, text))
    return to_write


@app.command()
def extract_js(
    root_fp: Path = Argument(
        Path("./barackobama.html"),
        help="Downloaded file from `www.instagram.com/{USERNAME}",
    ),
    out_fp: str = Argument("{basename}_scripts.js"),
    base_url: str = Argument("https://www.instagram.com"),
    tolerate_no_internet: bool = False,
) -> None:
    root_fp = Path("./barackobama.html")
    with root_fp.open() as f:
        sp = Soup(f.read(), features="html.parser")

    to_write = _extract_script_els(
        sp, base_url, tolerate_no_internet, Session(), BASE_HEADERS
    )
    if to_write == None:
        return

    out_fp = out_fp.format(basename=root_fp.stem)

    with open(out_fp, "w") as out_f:
        for idx, (el_attrs, content) in enumerate(to_write):
            out_f.write(f"// {idx}. {el_attrs}\n\n")
            out_f.write(content)


BASE_HEADERS: Mapping[str, str] = {
    "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
    "Accept": "*/*",
    "Accept-Language": "en-US,en;q=0.5",
}
API_BASE_HEADERS: Mapping[str, str] = {
    "X-IG-WWW-Claim": "0",
    "X-Requested-With": "XMLHttpRequest",
    "Alt-Used": "www.instagram.com",
}
APP_ID = re.compile(
    r"""e.instagramWebDesktopFBAppId*=["']([0-9]*)["']""", re.IGNORECASE
)
ASBD_ID = re.compile(r"""e.ASBD_ID*=["']([0-9]*)'""", re.IGNORECASE)
QUERY_HASH = re.compile(r"""queryId:["']([^"']*)["']""", re.IGNORECASE)
SHARED_DATA_SCRIPT = re.compile(r"window._sharedData\s*=\s*", re.IGNORECASE)


@dataclass
class ApiParams:
    user_id: str
    app_id: int
    asbd_id: int
    query_hash: str
    csrf_token: str


class SharedData(NamedTuple):
    csrf_token: str
    user_id: str


def laborous_way_of_finding_user_id(uname: str, sess: Session) -> Optional[str]:
    url = f"https://www.instagram.com/{uname}/?__a=1"
    try:
        req = sess.get(url, headers=BASE_HEADERS)
        the_json = req.json()
        match = re.search("_([0-9]+)$", the_json["logging_page_id"])
        if not match:
            return None
        user_id = match.groups(1)[0]
        if not isinstance(user_id, str):
            print("Weird. match().groups(1) is giving out an int.")
            return None
        return user_id
    except Exception as e:
        print(e)
        return None


def extract_csrf_token_and_user_id(
    uname: str, script_els: List[Script], sess: Session
) -> Optional[SharedData]:
    for _, text in script_els:
        if SHARED_DATA_SCRIPT.search(text):
            serialized_shared_data = SHARED_DATA_SCRIPT.sub("", text).strip(";")
            shared_data_json = json.loads(serialized_shared_data)
            try:
                csrf_token = shared_data_json["config"]["csrf_token"]
            except (KeyError, ValueError):
                print("Couldn't extract either csrf token")
                return None
            try:
                user_id = shared_data_json["entry_data"]["ProfilePage"][0]["graphql"][
                    "user"
                ]["id"]
            except (KeyError):
                user_id = laborous_way_of_finding_user_id(uname, sess)
                if not user_id:
                    print("Couldn't extract user ID")
                    return None
            shared_data = SharedData(csrf_token, user_id)
            return shared_data

    return None


def extract_api_param(
    js_txt: str, ptrn: re.Pattern, converter: Callable[[str], _T] = int
) -> Optional[_T]:
    match = ptrn.search(js_txt)
    if match is None:
        print(f"Couldn't extract {ptrn}")
        return
    return converter(match.group(1))


def extract_api_params(uname: str, session: Session) -> Optional[ApiParams]:
    base_url = f"https://www.instagram.com/{uname}"
    try:
        resp = session.get(base_url, headers=BASE_HEADERS)
    except ConnectionError as e:
        print(e)
        return None
    sp = Soup(resp.text, features="html.parser")
    try:
        script_els = _extract_script_els(sp, base_url, False, session, BASE_HEADERS)
    except RuntimeError:
        return None

    if not script_els:
        print(f"Couldn't extract scripts for {uname}")
        return

    # We'are gonna assume it's gonna be in the file names
    js_txt = None
    for attrs, text in script_els:
        if "src" in attrs and "ConsumerLibCommons" in attrs["src"]:
            js_txt = text
            break
    if js_txt is None:
        print(f"Couldn't find ConsumerLibCommons for {uname}")
        return

    app_id = extract_api_param(js_txt, APP_ID)
    asbd_id = extract_api_param(js_txt, ASBD_ID)
    query_hash = extract_api_param(js_txt, QUERY_HASH, str)
    shared_data = extract_csrf_token_and_user_id(uname, script_els, session)
    if app_id is None or asbd_id is None or query_hash is None or shared_data is None:
        return None
    csrf_token, user_id = shared_data

    return ApiParams(user_id, app_id, asbd_id, query_hash, csrf_token)


@contextmanager
def saved_session(sess_file: Path) -> Iterator[Session]:
    if sess_file.exists():
        with sess_file.open("rb") as f:
            session: Session = dill.load(f)
    else:
        session = Session()
    session = CacheControl(session)
    yield session
    print("Saving session...", end="")
    with sess_file.open("wb") as f:
        dill.dump(session, f)


SCHEME, NETLOC, PATH, _, _ = urlsplit("https://www.instagram.com/graphql/query/")


@dataclass(repr=True)
class Error:
    msg: str

    def __str__(self) -> str:
        return repr(self)


_P = ParamSpec("_P")
_Ret = TypeVar("_Ret")


def reprcall(func: Callable, *args: Any, **kwargs: Any) -> str:
    repr_args = ", ".join(map(str, args))
    repr_kwargs = ", ".join(f"{key}={value}" for key, value in kwargs.items())
    return f"{func.__name__}({repr_args}, {repr_kwargs})"


def exponential_backoff(
    is_failure: Callable[[_Ret], bool],
    multiplier: float = 1,
    exp: float = 2,
    verbose: bool = False,
    zero_power_on_sucess: bool=False,
) -> Callable[[Callable[_P, _Ret]], Callable[_P, _Ret]]:
    cur_power = 0

    def decorator(func: Callable[_P, _Ret]) -> Callable[_P, _Ret]:
        def new_func(*args: _P.args, **kwargs: _P.kwargs) -> _Ret:
            nonlocal cur_power
            while is_failure(val := func(*args, **kwargs)):
                to_wait = multiplier * (exp ** cur_power)
                cur_power += 1
                if verbose:
                    print(
                        f"{reprcall(func, args, kwargs)} failed. Waiting {to_wait} secs."
                    )
                time.sleep(to_wait)
            if zero_power_on_sucess:
                cur_power = 0
            else:
                cur_power -= 1
            return val

        return new_func

    return decorator


def get_user_feed(
    sess: Session,
    api_params: ApiParams,
    num_to_fetch: int,
    after_token: Optional[str] = None,
    rate_limiter: Optional[ThreadedRateLimiter] = None,
) -> Union[Error, UserNode]:
    # print(f"Fetching hopeuflly {num_to_fetch} items for {api_params.user_id} ")
    ask_now = min(45 + randint(-5, 5), num_to_fetch)
    url_variables = {
        "id": api_params.user_id,
        "first": ask_now,
    }
    url_query_hash = api_params.query_hash
    if after_token:
        url_variables["after"] = after_token

    query = urlencode(
        {
            "query_hash": url_query_hash,
            "variables": json.dumps(url_variables),
        }
    )
    url = urlunsplit(
        SplitResult(scheme=SCHEME, netloc=NETLOC, path=PATH, query=query, fragment="")
    )

    headers: dict[str, str] = {}
    headers |= BASE_HEADERS
    headers | API_BASE_HEADERS
    headers |= {
        "X-CSRFToken": api_params.csrf_token,
        "X-IG-App-ID": str(api_params.app_id),
        "X-ASBD-ID": str(api_params.asbd_id),
    }
    if rate_limiter:
        rate_limiter()
    # print(f"Getting {url}")
    try:
        resp = sess.get(url, headers=headers)
    except ConnectionError as e:
        return Error(str(e))

    if resp.status_code != 200:
        return Error(f"Return status code was {resp.status_code}")

    try:
        resp_json = json.loads(resp.text)
    except json.JSONDecodeError:
        return Error("Couldn't decode API JSON response. Most likely asked to login.")
    if resp_json["status"] != "ok":
        return Error(f"Instagram status was not 'ok': {resp_json['status']}")
    user_node = UserNode.parse_obj(resp_json["data"]["user"])

    if (
        (num_fetched := len(user_node.edge_owner_to_timeline_media.edges))
        < num_to_fetch
        and user_node.edge_owner_to_timeline_media.page_info.has_next_page
    ):
        remaining = num_to_fetch - num_fetched
        after_token = user_node.edge_owner_to_timeline_media.page_info.end_cursor
        assert after_token is not None
        next_api_result = get_user_feed(sess, api_params, remaining, after_token)
        if not isinstance(next_api_result, Error):
            user_node.edge_owner_to_timeline_media.edges.extend(
                next_api_result.edge_owner_to_timeline_media.edges
            )
        else:
            print(f"Had trouble fetching {remaining} posts.")
    return user_node


def scrape_user(
    uname: str,
    sess: Session,
    max: int,
    rate_limiter: Optional[ThreadedRateLimiter] = None,
) -> Union[Error, UserNode]:
    api_params = extract_api_params(uname, sess)
    if api_params is None:
        return Error(f"Couldn't extract API params for {uname}")
    else:
        return get_user_feed(sess, api_params, max, rate_limiter=rate_limiter)


def get_proxies() -> list[str]:
    req = requests.get(
        "https://proxylist.geonode.com/api/proxy-list?limit=100&page=1&sort_by=lastChecked&sort_type=desc"
    )
    proxies_json = req.json()

    # I think there are some who support only HTTP
    proxies_json = [
        i
        for i in proxies_json["data"]
        if ("protocols" in i) and "socks4" in i["protocols"]
    ]
    return [f"socks4://{item['ip']}:{item['port']}" for item in proxies_json]


@app.command()
def scrape_users(
    user_list_file: Path,
    output_dir: Path,
    posts_per_user: int,
    sess_file: Path,
    backoff_mult: float = 30,
    rlperiod: Optional[int] = Option(None, help="Rate limit period"),
    rltimes: Optional[int] = Option(
        None, help="Max number of requests within the rate limit period"
    ),
    useproxies: bool = False,
) -> None:

    if (rlperiod and not rltimes) or (rltimes and not rlperiod):
        raise typer.BadParameter(
            "Either both, or none, of --rlperiod and --rltimes must be used"
        )
    rate_limiter = None
    if rlperiod:
        assert rltimes
        rate_limiter = ThreadedRateLimiter(
            calls=rltimes,
            period=rlperiod,
            call_when_waiting=lambda secs: print(
                f"Rate limit hit. Waiting for {secs} seconds"
            ),
        )

    proxies = None
    if useproxies:
        proxies = get_proxies()

    with user_list_file.open() as f:
        unames = set(l.strip().lower() for l in f)
    for fp in output_dir.glob("*.json"):
        if (uname := fp.name) in unames:
            unames.remove(uname)

    backoff_wrapper = exponential_backoff(
        is_failure=lambda res: isinstance(res, Error),
        multiplier=backoff_mult,
        verbose=True,
    )
    scrape_user_wrapped = backoff_wrapper(scrape_user)
    with saved_session(sess_file) as sess:
        if proxies:
            sess = CacheControl(Session())
            proxy = choice(proxies)
            sess.proxies = {"https": proxy, "http": proxy}
        with typer.progressbar(unames) as pbar:
            for uname in pbar:
                pbar.label = f"Doing {uname}"
                result = scrape_user_wrapped(uname, sess, posts_per_user, rate_limiter)
                if isinstance(result, Error):
                    print(result)
                else:
                    result_json = result.json(indent=2)
                    with open(output_dir / f"{uname}.json", "w") as f:
                        f.write(result_json)


if __name__ == "__main__":
    app()
