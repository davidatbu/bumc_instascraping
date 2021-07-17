from pathlib import Path
from bs4 import BeautifulSoup as Soup
from cachecontrol import CacheControl
import dill
from datetime import datetime
from dataclasses import dataclass
import re
from pprint import pformat
from typing import Any, Dict, List, Optional, Tuple
import requests as r
from requests import ConnectionError
import typer
from typer import Argument
from bs4 import BeautifulSoup as Soup

app = typer.Typer()


non_ascii = re.compile(r"[^a-zA-Z0-9_]+")


def _resolve_href(base_url: str, href: str) -> str:
    # TODO: Probably fails in many cases.
    if href[0] == "/":
        return base_url + href
    return href


ElAttrs = Dict[str, Any]


def _extract_script_els(
    sp: Soup,
    base_url: str,
    tolerate_no_internet: bool,
    session: r.Session,
    headers: Optional[Dict[str, str]] = None,
) -> Optional[List[Tuple[ElAttrs, str]]]:
    script_els = sp.find_all("script")

    to_write: List[Tuple[Dict[str, Any], str]] = []

    for el in script_els:
        if "src" in el.attrs:  # A link to JS
            js_link = _resolve_href(base_url, el["src"])
            text = None
            resp = None
            try:
                resp = session.get(js_link, headers=headers)
                text = resp.text
                if resp.status_code != 200:
                    raise RuntimeError(
                        f"Got response code: {resp.status_code}, and text: {resp.text}"
                    )
            except ConnectionError as e:
                print(
                    f"I think you're not connected to internet. {js_link} failed with {e}"
                )
                if text == None:
                    text = str(e)
                if tolerate_no_internet:
                    to_write.append((el.attrs, text))
                else:
                    return None
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

    to_write = _extract_script_els(sp, base_url, tolerate_no_internet, r.Session(), BASE_HEADERS)
    if to_write == None:
        return

    out_fp = out_fp.format(basename=root_fp.stem)

    with open(out_fp, "w") as out_f:
        for idx, (el_attrs, content) in enumerate(to_write):
            out_f.write(f"// {idx}. {el_attrs}\n\n")
            out_f.write(content)


@dataclass
class ScrapedIGPost:
    posted_on: datetime
    text: str
    has_media: bool


@dataclass
class ScrapedIGUser:
    uname: str
    id: int
    total_num_posts: int
    posts: List[ScrapedIGPost]


BASE_HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
    "Accept": "*/*",
    "Accept-Language": "en-US,en;q=0.5",
}


@app.command()
def scrape_user(uname: str, max: int, sess_file: Path) -> None:
    uname = "djokernole"
    max: int = 100 
    sess_file = Path("session.dill")
    max + max
    if sess_file.exists():
        with sess_file.open("b"):
            session: r.Session = dill.load(sess_file)
    else:
        session = r.Session()
    session: r.Session = CacheControl(session)

    base_url = f"https://www.instagram.com/{uname}"
    with session:
        resp = session.get(base_url)
        landing_page_sp = Soup(resp.text)
        script_els = _extract_script_els(landing_page_sp, base_url, False, session, BASE_HEADERS)


def _scrape_user(uname: str, max: int, session: r.Session) -> ScrapedIGUser:
    # First, fetch the HTML page, like a browser would (plus, we need to extract some
    # details from there)

    user_page = session.get(f"https://www.instagram.com/{uname}")

    return ScrapedIGUser(uname, max, max, [])


if __name__ == "__main__":
    app()
