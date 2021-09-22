#!/usr/bin/env python
from typing_extensions import Literal
from bumc_instascraping import nn
from pathlib import Path
from typing import Optional

from . import scraping
import typer
from typer import Option

app = typer.Typer()


@app.command()
def scrape_users(
    user_file: Path = Option(...),
    output_dir: Path = Option(...),
    posts_per_user: int = Option(...),
    sess_file: Path = Option(...),
    backoff_mult: Optional[float] = None,
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


@app.command()
def train(
    input_dir: Path = Option(...),
    model_output_dir: Path = Option(...),
    ### hyper parameters
    learn_rate: float = 5e-6,
    epoch_num: int = 10,
    max_seq_len: int = 18,
    print_step: int = 100,
    seed: int = 2021,
    accumulation_steps: int = 10,
    model_name_or_path: str = nn.DEFAULT_MODEL_NAME_OR_PATH,
    finetuned_model_name: str = nn.DEFAULT_FINETUNED_MODEL_NAME,
    device: nn.Device = "cpu",
) -> None:
    nn.train(
        input_dir,
        model_output_dir,
        learn_rate,
        epoch_num,
        max_seq_len,
        print_step,
        seed,
        accumulation_steps,
        model_name_or_path,
        finetuned_model_name,
        device.value,
    )


@app.command()
def predict(
    input_dir: Path = Option(...),
    model_dir: Path = Option(...),
    max_seq_len: int = 18,
    finetuned_model_name: str = nn.DEFAULT_FINETUNED_MODEL_NAME,
    model_name_or_path: str = nn.DEFAULT_MODEL_NAME_OR_PATH,
    device: nn.Device = nn.DEFAULT_DEVICE,
) -> None:
    nn.predict(
        input_dir,
        model_dir,
        max_seq_len,
        finetuned_model_name,
        model_name_or_path,
        device.value,
    )


if __name__ == "__main__":
    app()
