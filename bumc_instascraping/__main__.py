#!/usr/bin/env python
from pathlib import Path
from typing import Optional

from . import scraping
import typer
from typer import Argument, Option

app = typer.Typer()


@app.command()
def scrape_users(
    user_file: Path = Option(...),
    output_dir: Path = Option(...),
    posts_per_user: int = Option(...),
    sess_file: Path = Option(...),
    backoff_mult: Optional[float]= None,
    backoff_exp: Optional[float] = None,
    ratelimit: list[str] = [],
    useproxies: bool = False,
) -> None:
    scraping.scrape_users(
        user_file,
        output_dir,
        posts_per_user,
        sess_file,
        backoff_mult,
        backoff_exp,
        ratelimit,
        useproxies,
    )

def extract_js(
    root_fp: Path = Argument(
        Path("./barackobama.html"),
        help="Downloaded file from `www.instagram.com/{USERNAME}",
    ),
    out_fp: str = Argument("{basename}_scripts.js"),
    base_url: str = Argument("https://www.instagram.com"),
    tolerate_no_internet: bool = False,
) -> None:
    scraping.extract_js(root_fp, out_fp, base_url, tolerate_no_internet)


if __name__ == "__main__":
    app()
