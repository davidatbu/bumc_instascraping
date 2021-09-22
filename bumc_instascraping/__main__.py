#!/usr/bin/env python
from bumc_instascraping import nn
from pathlib import Path
from typing import Optional

from . import scraping
import typer
from typer import Option

app = typer.Typer()


@app.command()
def scrape_users(
    user_file: Path = Option(
        ..., help="""A file with one instagram user on each line."""
    ),
    output_dir: Path = Option(
        ..., help="The directory where the output JSON files will be."
    ),
    posts_per_user: int = Option(100, help="How many posts to scrape per user."),
    backoff_mult: Optional[float] = Option(
        None,
        help="If you want to retry failed requests exponential backoff, "
        "set this option as well as the --backoff-exp option."
        " For example --backoff-mult 2 --backoff-exp 3 would start exponential backoff"
        " that would initially wait 2 seconds to retry, and then if the same request "
        "failed 2^3 = 8 seconds, and then 8^3 = 192 seconds.",
    ),
    backoff_exp: Optional[float] = Option(
        None, help="Look at the documentation for the --backoff-mult option."
    ),
    ratelimit: list[str] = Option(
        [],
        help="You can specify multiple rate limits."
        " You specify them in this format: <number_of_calls>,<number_of_seconds. "
        "Therefore, --ratelimit 5,60 would place a limitation of a maximum of 5 API calls in any 60 second block.",
    ),
    useproxies: bool = Option(
        False,
        help="If you set this, the code will automatically fetch proxy server IP addresses "
        "and try to use them. This hasn't proven effective in my experience because (most likely) Instagram blocks "
        "proxy IP addresses somehow.",
    ),
) -> None:
    scraping.scrape_users(
        user_file,
        output_dir,
        posts_per_user,
        backoff_mult,
        backoff_exp,
        ratelimit,
        useproxies,
    )


@app.command()
def train(
    input_dir: Path = Option(
        ...,
        help="A directory containing training data. "
        "Must contain a file called 'age_and_gender_labels.csv' (only the age column is actually used of course)."
        " It must also contain a sub directory called 'tweets_per_user' that has csv files that are named like '@twitter_uname.csv',"
        " where there's a column called 'text' containing that users tweets.",
    ),
    model_output_dir: Path = Option(
        ..., help="The directory in which to save the weights."
    ),
    ### hyper parameters
    learn_rate: float = 5e-6,
    epoch_num: int = 10,
    max_seq_len: int = 18,
    print_step: int = 100,
    seed: int = 2021,
    accumulation_steps: int = Option(
        10, help="Steps to accumulate loss before doing backward prop."
    ),
    model_name_or_path: str = Option(
        nn.DEFAULT_MODEL_NAME_OR_PATH,
        help="The HuggingFace model name to use. Usually, 'bert-base-uncased'.",
    ),
    finetuned_model_name: str = Option(
        nn.DEFAULT_FINETUNED_MODEL_NAME,
        help="The name of the file that will have the weights of the model.",
    ),
    age_cutoff: int = 21,
    device: nn.Device = nn.Device.cpu,
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
        age_cutoff,
    )


@app.command()
def predict(
    input_dir: Path = Option(
        ..., help="The directory containing the scraped JSON files."
    ),
    finetuned_model_path: Path = Option(
        ..., help="The filename of the saved, trained model."
    ),
    prediction_output_file: Path = Option(
        ..., help="The filie path to which predictions for each user will be written."
    ),
    max_seq_len: int = 18,
    device: nn.Device = nn.Device.cpu,
    age_cutoff: int = 21,
    model_name_or_path: str = Option(
        nn.DEFAULT_MODEL_NAME_OR_PATH,
        help="The HuggingFace model name that was used. Usually, 'bert-base-uncased'.",
    ),
) -> None:
    nn.predict(
        input_dir,
        prediction_output_file=prediction_output_file,
        max_seq_len=max_seq_len,
        finetuned_model_path=finetuned_model_path,
        model_name_or_path=model_name_or_path,
        device=device.value,
        age_cutoff=age_cutoff
    )


if __name__ == "__main__":
    app()
