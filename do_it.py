from pathlib import Path
import re
from pprint import pformat
from typing import Any, Dict, List, Tuple
import requests
from requests import ConnectionError
import typer
from typer import Argument
from bs4 import BeautifulSoup as Soup

app = typer.Typer()


non_ascii = re.compile(r'[^a-zA-Z0-9_]+')
def _resolve_href(base_url: str, href: str) -> str:
    # TODO: Probably fails in many cases.
    if href[0] == "/":
        return base_url + href
    return href


@app.command()
def extract_js(
    root_fp: Path = Argument(
        Path("./barackobama.html"),
        help="Downloaded file from `www.instagram.com/{USERNAME}",
    ),
    out_fp: str = Argument(
        "{basename}_scripts.js"
    ),
    base_url: str= Argument(
        "https://www.instagram.com"
    ),
    tolerate_no_internet: bool = False,
) -> None:
    root_fp = Path('./barackobama.html')
    with root_fp.open() as f:
        sp = Soup(f.read(), features="html.parser")
    script_els = sp.find_all("script")


    to_write: List[Tuple[Dict[str, Any], str]] = []

    for  el in script_els:
        if 'src' in el.attrs: # A link to JS
            js_link = _resolve_href(base_url, el["src"])
            text = None
            resp = None
            try:
                resp = requests.get(js_link)
                text = resp.text
                if resp.status_code != 200:
                    raise RuntimeError(f"Got response code: {resp.status_code}, and text: {resp.text}")
            except ConnectionError as e:
                print(f"I think you're not connected to internet. {js_link} failed with {e}")
                if text == None:
                    text = str(e)
                if tolerate_no_internet:
                    to_write.append((el.attrs,  text))
                else:
                    return
            else:
                to_write.append((el.attrs, text))
        else:
            if len(el_children := list(el.children)) != 1:
                print(f"Found NOT ONE but {len(el_children)} children of <script> tag."
                      f"The attributes of the tag were {pformat(el.attrs)}")
                return
            else:
                text = str(el_children[0])
                to_write.append((el.attrs,  text))

    out_fp = out_fp.format(basename=root_fp.stem)

    with open(out_fp, "w") as out_f:
        for idx, (el_attrs, content) in enumerate(to_write):
            out_f.write(f"// {idx}. {el_attrs}\n\n")
            out_f.write(content)

if __name__ == "__main__":
    app()
