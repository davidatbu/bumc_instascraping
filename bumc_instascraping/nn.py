from __future__ import annotations
import csv
import typer
from dataclasses import dataclass
from enum import Enum
from pathlib import Path
import random
from typing import List, Literal, Sequence, TypeVar, NamedTuple, Optional

import numpy as np
import pandas as pd
import torch
import torch.nn as nn
from torch.nn import BCELoss
from tqdm import tqdm
from transformers import AutoModel
from transformers import BertConfig, BertTokenizer

from .scraping import UserNode


class ModelOutput(NamedTuple):
    loss: Optional[torch.Tensor]
    logits: torch.Tensor

class Model(nn.Module):
    def __init__(self, config, model_name_or_path, num_labels=1):
        super().__init__()

        self.num_labels = num_labels
        self.bert = AutoModel.from_pretrained(model_name_or_path)
        self.classifier = nn.Sequential(
            nn.Linear(config.hidden_size * 4, config.hidden_size // 2),
            nn.GELU(),
            nn.Linear(config.hidden_size // 2, self.num_labels),
            nn.Sigmoid(),
        )
        self.loss_fct = BCELoss()

    def forward(
        self,
        input_ids=None,
        attention_mask=None,
        token_type_ids=None,
        position_ids=None,
        head_mask=None,
        inputs_embeds=None,
        output_hidden_states=True,
        return_dict=True,
        labels=None,
    )-> ModelOutput:

        output = self.bert.forward(
            input_ids,
            attention_mask=attention_mask,
            token_type_ids=token_type_ids,
            position_ids=position_ids,
            head_mask=head_mask,
            inputs_embeds=inputs_embeds,
            output_hidden_states=output_hidden_states,
            return_dict=return_dict,
        )

        assert isinstance(output, dict)
        x = (
            torch.cat(output["hidden_states"][-4:], dim=-1)[:, 0, :]
            .mean(dim=0)
            .unsqueeze(0)
        )

        logits = self.classifier(x)
        loss = None
        if labels is not None:
            loss = self.loss_fct(logits.view(-1), labels.view(-1))

        return ModelOutput(loss=loss, logits=logits)




@dataclass
class TrainingBatch:
    username: str
    tweets: list[str]
    age_greater_than_cutoff: float


@dataclass
class PredictingBatch:
    username: str
    tweets: list[str]


def _read_training_and_testing_data(input_dir: Path, age_cutoff: int) -> list[TrainingBatch]:
    labelled_usernames_fp = input_dir / "age_and_gender_labels.csv"
    labelled_usernames: pd.DataFrame = pd.read_csv(labelled_usernames_fp)
    assert "user.name" in labelled_usernames.columns
    assert "labeled age" in labelled_usernames.columns

    labelled_usernames = labelled_usernames[
        ["user.name", "labeled age"]
    ]  # Discard other columns
    total_count = len(labelled_usernames)
    labelled_usernames = labelled_usernames[labelled_usernames["labeled age"].notna()]
    non_null_count = len(labelled_usernames)
    print(
        f"Found {non_null_count} users with non-NA ages (from a total of {total_count}"
    )

    labelled_usernames["user.name"] = labelled_usernames["user.name"].str.lower()
    tweet_fps = {
        fp.stem.lower(): fp for fp in (input_dir / "tweets_per_user").iterdir()
    }
    assert all(uname.startswith("@") for uname in tweet_fps.keys())
    assert labelled_usernames["user.name"].str.startswith("@").all()
    tweets_found_filter = labelled_usernames["user.name"].isin(list(tweet_fps.keys()))
    labelled_usernames = labelled_usernames[tweets_found_filter]
    print(
        f"Found {len(labelled_usernames)} usernames with labelled age, AND a file containing their tweets was present."
    )

    if (dups := labelled_usernames["user.name"].duplicated()).any():
        labelled_usernames.drop_duplicates("user.name", inplace=True)
        print(f"Dropped {dups.sum()} duplicated usernames.")

    unames = set(labelled_usernames["user.name"].tolist())
    tweet_fps = {uname: fp for uname, fp in tweet_fps.items() if uname in unames}
    assert len(tweet_fps) == len(labelled_usernames)

    labelled_usernames.set_index("user.name", inplace=True)

    tweets_by_uname: list[tuple[str, list[str]]] = [
        (uname, pd.read_csv(fp)["text"].tolist())
        for uname, fp in tqdm(tweet_fps.items(), desc="Reading tweets")
    ]
    result = [
        TrainingBatch(
            username=username,
            tweets=tweets,
            age_greater_than_cutoff=1.0 if labelled_usernames.at[username, "labeled age"] >= age_cutoff else 0.0,
        )
        for username, tweets in tweets_by_uname
    ]
    return result


def _set_seed(seed: int) -> None:
    random.seed(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed(seed)


_T = TypeVar("_T")


def _test_train_split(
    items: Sequence[_T], test_split: float = 0.1, shuffle: bool = True
) -> tuple[list[_T], list[_T]]:
    test_num = round(len(items) * test_split)
    if test_num == 0:
        raise Exception(
            f"Not enough values (a total of {len(items)}) to do a test split"
            f" ratio of {test_split}."
        )
    if shuffle:
        test_idxes = set(random.sample(range(len(items)), test_num))
    else:
        test_idxes = range(test_num)

    test = []
    train = []
    for i, item in enumerate(items):
        if i in test_idxes:
            test.append(item)
        else:
            train.append(item)
    return (train, test)


class Device(Enum):
    cpu = "cpu"
    cuda = "cuda"

DEFAULT_DEVICE = Device.cuda if torch.cuda.is_available() else Device.cpu
DEFAULT_FINETUNED_MODEL_NAME = "finetuned_model.pth"
DEFAULT_MODEL_NAME_OR_PATH = "bert-base-uncased"


def train(
    input_dir: Path,
    model_output_dir: Path,
    ### hyper parameters
    learn_rate: float,
    epoch_num: int,
    max_seq_len: int,
    print_step: int,
    seed: int,
    accumulation_steps: int,
    model_name_or_path: str,
    finetuned_model_name: str,
    device: Literal["cpu", "cuda"],
    age_cutoff: int,
) -> None:
    training_and_testing_batches = _read_training_and_testing_data(input_dir, age_cutoff)
    training_batches, testing_batches = _test_train_split(
        training_and_testing_batches, 0.1
    )
    _set_seed(seed)
    # load model,  optimizer
    config = BertConfig.from_pretrained(model_name_or_path)
    tokenizer = BertTokenizer.from_pretrained(model_name_or_path)
    model = Model(config, model_name_or_path)
    model.to(device)
    optimizer = torch.optim.Adam(
        filter(lambda p: p.requires_grad, model.parameters()), lr=learn_rate
    )
    best_score = 0
    current_step = 0
    print_loss = []

    for epoch in range(epoch_num):
        print("========= Epoch", epoch + 1)
        # train
        epoch_loss = []
        model.train()
        pbar = typer.progressbar(training_batches)
        with pbar as pbar:
            for batch in pbar:
                encoded_input = tokenizer(
                    batch.tweets,
                    return_tensors="pt",
                    max_length=max_seq_len,
                    padding=True,
                    truncation=True,
                )
                input_ids = encoded_input["input_ids"].to(device)
                token_type_ids = encoded_input["token_type_ids"].to(device)
                attention_mask = encoded_input["attention_mask"].to(device)
                label = torch.Tensor([batch.age_greater_than_cutoff]).to(device)

                loss = model.forward(
                    input_ids=input_ids,
                    token_type_ids=token_type_ids,
                    attention_mask=attention_mask,
                    labels=label,
                ).loss
                assert loss is not None
                print_loss.append(loss.item())
                epoch_loss.append(loss.item())
                current_step += 1

                loss /= accumulation_steps
                loss.backward()

                if current_step % accumulation_steps == 0:
                    optimizer.step()
                    optimizer.zero_grad()

                if current_step % print_step == 0:
                    print(
                        "mean train loss of 100 steps in the %d step: %.4f"
                        % (current_step, sum(print_loss) / print_step)
                    )
                    print_loss.clear()
        print(
            "mean train loss in the %d epoch: %.4f"
            % (epoch + 1, sum(epoch_loss) / len(epoch_loss))
        )
        print()


        predictions = None
        for batch in testing_batches:
            encoded_input = tokenizer(
                batch.tweets,
                return_tensors="pt",
                max_length=max_seq_len,
                padding=True,
                truncation=True,
            )
            input_ids = encoded_input["input_ids"].to(device)
            token_type_ids = encoded_input["token_type_ids"].to(device)
            attention_mask = encoded_input["attention_mask"].to(device)

            output = model.forward(
                input_ids=input_ids,
                token_type_ids=token_type_ids,
                attention_mask=attention_mask,
            ).logits
            output = torch.squeeze(output, -1).cpu().data.numpy() >= 0.5
            if predictions is not None:
                predictions = np.append(predictions, output.astype(int))
            else:
                predictions = output.astype(int)

        ground = np.array([batch.age_greater_than_cutoff for batch in testing_batches])
        compr: np.ndarray = predictions == ground
        acc = compr.mean()
        print(
            "epoch %d   test acc : %.6f   best acc : %.6f"
            % (epoch + 1, acc, best_score)
        )
        if acc > best_score:
            best_score = acc
            torch.save(model.state_dict(), model_output_dir / finetuned_model_name)



def predict(
    input_dir: Path,
    prediction_output_file: Path,
    max_seq_len: int,
    finetuned_model_path: Path,
    model_name_or_path: str,
    age_cutoff: int,
    device: Literal["cpu", "cuda"],
) -> None:
    config = BertConfig.from_pretrained(model_name_or_path)
    tokenizer = BertTokenizer.from_pretrained(model_name_or_path)
    model = Model(config, model_name_or_path)
    model.load_state_dict(torch.load(finetuned_model_path))
    model.to(device)
    model.eval()
    predictions = []
    predicted_for_users = []

    json_fps = list(input_dir.glob("*.json"))

    for json_fp in tqdm(
        json_fps,
        leave=False,
    ):
        with json_fp.open() as json_file:
            user_node = UserNode.parse_raw(json_file.read())

        posts: List[str] = []
        for edge in user_node.edge_owner_to_timeline_media.edges:
            has_caption = len(edge.node.edge_media_to_caption.edges) > 0
            if has_caption:
                caption = edge.node.edge_media_to_caption.edges[0].node.text
                posts.append(caption)

        print(f" Found {len(posts)} posts for {json_fp.stem} ... ", end="")
        if not posts:
            print("Skipping since 0 posts found in JSON file.")
            continue
        else:
            print("")

        encoded_input = tokenizer(
            posts,
            return_tensors="pt",
            max_length=max_seq_len,
            padding=True,
            truncation=True,
        )
        input_ids = encoded_input["input_ids"].to(device)
        token_type_ids = encoded_input["token_type_ids"].to(device)
        attention_mask = encoded_input["attention_mask"].to(device)

        output = model(
            input_ids=input_ids,
            token_type_ids=token_type_ids,
            attention_mask=attention_mask,
        ).logits
        output = torch.squeeze(output, -1).cpu().data.numpy() >= 0.5
        predictions.extend(output.astype(int))
        predicted_for_users.append(json_fp.stem)

    with prediction_output_file.open("w") as fout:
        csv_writer = csv.writer(fout)
        csv_writer.writerow(["Username", f"Age is equal to or greater than {age_cutoff}"])
        csv_writer.writerows(zip(predicted_for_users, predictions))
