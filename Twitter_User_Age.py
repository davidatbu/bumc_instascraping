from dataclasses import dataclass
from pathlib import Path
from typing import  cast
import numpy as np
import sys
from typer import Typer, Option
import pandas as pd
import json
from tqdm import tqdm
from glob import glob
from transformers import BertModel
import torch.nn as nn
from torch.nn import BCELoss
import numpy as np
import random
import torch
from transformers import BertTokenizer, BertConfig



class Model(nn.Module):
    def __init__(self, config, model_name_or_path, num_labels=1):
        super().__init__()

        self.num_labels = num_labels
        self.bert = BertModel.from_pretrained(model_name_or_path)
        self.classifier = nn.Sequential(
            nn.Linear(config.hidden_size * 4, config.hidden_size // 2),
            nn.GELU(),
            nn.Linear(config.hidden_size // 2, self.num_labels),
            nn.Sigmoid(),
        )

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
    ):

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

        outputs = (logits,)

        if labels is not None:
            loss_fct = BCELoss()
            loss = loss_fct(logits.view(-1), labels.view(-1))
            outputs = (loss,) + outputs

        return outputs

app = Typer()

@dataclass
class TrainingBatch:
    username: str
    tweets: list[str]
    age: float

def _read_training_data(input_dir: Path) -> list[TrainingBatch]:
    labelled_usernames_fp = input_dir / "age_and_gender_labels.csv"
    labelled_usernames = pd.read_csv(labelled_usernames_fp)
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
    tweet_fps = {
        uname: fp
        for uname, fp in tweet_fps.items()
        if uname in unames
    }
    assert len(tweet_fps) == len(labelled_usernames)

    labelled_usernames.set_index("user.name", inplace=True)

    tweets_by_uname: list[tuple[str, list[str]]] = [
        (uname, pd.read_csv(fp)["text"].tolist()) for uname, fp in tqdm(tweet_fps.items(), desc="Reading tweets")
    ]
    result = [
        TrainingBatch(
            username=username,
        tweets=tweets,
            age= cast(float, labelled_usernames.at[username, "labeled age"]),
        )
        for username, tweets in tweets_by_uname
    ]
    return result


@app.command()
def train(input_dir: Path = Option(...), model_output_dir: Path = Option(...)) -> None:
    training_batches = _read_training_data(input_dir)

if __name__ == '__main__':
    train(Path('/Users/elemental/data/bumc/instascraping/labelled_data/'), Path('.'))
    app()
    sys.exit(0)


### hyper parameters
learn_rate = 5e-6
epoch_num = 10
max_seq_len = 18
print_step = 100
seed = 2021
accumulation_steps = 10

model_name_or_path = "bert-base-uncased"
finetune_model_path = 'finetune_model.pth'

if torch.cuda.is_available():
  device = torch.device("cuda")
else:
  device = torch.device("cpu")

random.seed(seed)
np.random.seed(seed)
torch.manual_seed(seed)
torch.cuda.manual_seed(seed)

# split train and test dataset
num_sample = len(user)
test_inx = random.sample(list(range(num_sample)),num_sample//10)
train_tw = []
test_tw = []
train_age = []
test_age = []
for i in range(num_sample):
  if i in test_inx:
    test_tw.append(tweets[i])
    test_age.append(age[i])
  else:
    train_tw.append(tweets[i])
    train_age.append(age[i])
print("the number of train:", len(train_age))
print("the number of test:", len(test_age))


# load model,  optimizer
config = BertConfig.from_pretrained(model_name_or_path)
tokenizer = BertTokenizer.from_pretrained(model_name_or_path)
model = Model(config, model_name_or_path)
model.to(device)
optimizer = torch.optim.Adam(filter(lambda p: p.requires_grad, model.parameters()), lr=learn_rate)

# print the paramsters are expected to be updated
# for n, p in model.named_parameters():
#   if p.requires_grad:
#     print(n)

# start training 
best_score = 0
current_step = 0
print_loss = []

print()
for epoch in range(epoch_num):
  print("========= Epoch", epoch+1)
  # train
  epoch_loss = []
  model.train()
  for i, tw in enumerate(train_tw):
    encoded_input = tokenizer(tw, return_tensors='pt', max_length=max_seq_len, padding=True, truncation=True)
    input_ids = encoded_input['input_ids'].to(device)
    token_type_ids = encoded_input['token_type_ids'].to(device)
    attention_mask = encoded_input['attention_mask'].to(device)
    label = torch.Tensor([train_age[i]]).to(device)

    loss = model(input_ids=input_ids, token_type_ids=token_type_ids, attention_mask=attention_mask, labels=label)[0] 
    print_loss.append(loss.item())
    epoch_loss.append(loss.item())
    current_step += 1

    loss /= accumulation_steps
    loss.backward()

    if current_step % accumulation_steps == 0:
      optimizer.step()
      optimizer.zero_grad()
    
    if current_step % print_step == 0:
      print("mean train loss of 100 steps in the %d step: %.4f" % (current_step, sum(print_loss)/print_step))
      print_loss.clear()
  print("mean train loss in the %d epoch: %.4f" % (epoch+1, sum(epoch_loss)/len(epoch_loss)))
  print()

  # test
  model.eval()
  predict = np.array([])
  for i, tw in enumerate(test_tw):
    encoded_input = tokenizer(tw, return_tensors='pt', max_length=max_seq_len, padding=True, truncation=True)
    input_ids = encoded_input['input_ids'].to(device)
    token_type_ids = encoded_input['token_type_ids'].to(device)
    attention_mask = encoded_input['attention_mask'].to(device)

    output = model(input_ids=input_ids, token_type_ids=token_type_ids, attention_mask=attention_mask)[0]
    output = torch.squeeze(output, -1).cpu().data.numpy() >= 0.5
    predict = np.append(predict, output.astype(int))
  ground = np.array(test_age)
  compr = predict == ground
  acc = np.sum(compr)/len(test_tw)
  if acc > best_score:
    best_score = acc
    torch.save(model.state_dict(), finetune_model_path)
  print("epoch %d   test acc : %.6f   best acc : %.6f" % (epoch+1, acc, best_score))
  print()
  print()


import random
import torch
from tqdm import tqdm
from transformers import BertTokenizer, BertConfig


# hyper parameters
max_seq_len = 18
model_name_or_path = "bert-base-uncased"
finetune_model_path = 'finetune_model.pth'

if torch.cuda.is_available():
  device = torch.device("cuda")
else:
  device = torch.device("cpu")


# load model,  optimizer
config = BertConfig.from_pretrained(model_name_or_path)
tokenizer = BertTokenizer.from_pretrained(model_name_or_path)
model = Model(config, model_name_or_path)
model.load_state_dict(torch.load(finetune_model_path))
model.to(device)

# start predicting
model.eval()
predict = np.array([])
for i, tw in tqdm(enumerate(tweets), mininterval=2, desc=' - Predicting ' + str(len(age)) + 'it', leave=False):
  encoded_input = tokenizer(tw, return_tensors='pt', max_length=max_seq_len, padding=True, truncation=True)
  input_ids = encoded_input['input_ids'].to(device)
  token_type_ids = encoded_input['token_type_ids'].to(device)
  attention_mask = encoded_input['attention_mask'].to(device)

  output = model(input_ids=input_ids, token_type_ids=token_type_ids, attention_mask=attention_mask)[0]
  output = torch.squeeze(output, -1).cpu().data.numpy() >= 0.5
  predict = np.append(predict, output.astype(int))
ground = np.array(age)
compr = predict == ground
acc = np.sum(compr)/len(tweets)
print("total acc : %.4f" % acc)

bert_age_prediction=[]
num_tweets_used=[]

for name in df_labeled["screen_name"]:
  if name not in user:
    bert_age_prediction.append(None)
    num_tweets_used.append(None)
  else:
    inx = user.index(name)
    if predict[inx]==1:
      ans = ">=21"
    else:
      ans = "<21"
    bert_age_prediction.append(ans)
    num_tweets_used.append(len(tweets[inx]))

df_labeled["bert.age.prediction"] = bert_age_prediction
df_labeled["num.tweets.used.bert.prediction"] = num_tweets_used
 
df_labeled.to_csv('Twitter_users_labeled_prediction.csv', index=True, header=True)


df_labeled

import os
import time
from tqdm import tqdm

pre_user = df_no_na["Username"].values.tolist()

pre_user_filter = []
pre_all_tweets = []

for i, userID in tqdm(enumerate(pre_user)):
  try:
    tweets = api.user_timeline(screen_name=userID, count=100,include_rts = False, tweet_mode = 'extended')
    tweet_text = [tweet._json['full_text'] for tweet in tweets]
    pre_all_tweets.append(tweet_text)
    pre_user_filter.append(pre_user[i])
      
  except tweepy.TweepError as e:
    # print(e.response.status_code, e.reason)
    # the user not found error
    # print("screen_name that failed=",  userID)
    pass

print("Extraction Done")

# save the tweets for each user
print("the number of valid users to predicted", len(pre_user_filter))
for i, userID in tqdm(enumerate(pre_user_filter)):
  filename = "pretweets/" + str(i) + '.txt'
  
  with open(filename, 'w', encoding='utf-8') as f:
    f.write(userID + '\n')
    for tw in pre_all_tweets[i]:
      f.write(tw.replace('\n', ' ') + '\n')

from glob import glob
from tqdm import tqdm
import numpy as np
import json

tw_json = {}
pre_user = []
pre_tweets = []

saved_pths = glob('pretweets/*.txt')
# print(len(saved_pths))

for filename in tqdm(saved_pths):
  with open(filename, 'r') as f:
    lines = f.readlines()
    tweet = [line.strip() for line in lines[1:]]
    if len(tweet) == 0:
      continue
    pre_user.append(lines[0].strip())
    pre_tweets.append(tweet)
    tw_json[lines[0].strip()] = tweet

with open("pretweets.json", "w", encoding ="utf8") as f:
  json.dump(tw_json, f, ensure_ascii=False)


import numpy as np
import json
import random
import torch
from tqdm import tqdm
from transformers import BertTokenizer, BertConfig

# load data
tw_json = json.load(open("pretweets.json", "r", encoding ="utf8"))
pre_user = list(tw_json.keys())

# hyper parameters
max_seq_len = 18
model_name_or_path = "bert-base-uncased"
finetune_model_path = 'finetune_model.pth'

if torch.cuda.is_available():
  device = torch.device("cuda")
else:
  device = torch.device("cpu")


# load model
config = BertConfig.from_pretrained(model_name_or_path)
tokenizer = BertTokenizer.from_pretrained(model_name_or_path)
model = Model(config, model_name_or_path)
model.load_state_dict(torch.load(finetune_model_path))
model.to(device)

# start predicting
model.eval()
predict = np.array([])
for i, u in tqdm(enumerate(pre_user), mininterval=2, desc=' - Predicting ' + str(len(pre_user)) + 'it', leave=False):
  tw = tw_json[u]
  encoded_input = tokenizer(tw, return_tensors='pt', max_length=max_seq_len, padding=True, truncation=True)
  input_ids = encoded_input['input_ids'].to(device)
  token_type_ids = encoded_input['token_type_ids'].to(device)
  attention_mask = encoded_input['attention_mask'].to(device)

  output = model(input_ids=input_ids, token_type_ids=token_type_ids, attention_mask=attention_mask)[0]
  output = torch.squeeze(output, -1).cpu().data.numpy() >= 0.5
  predict = np.append(predict, output.astype(int))

bert_age_prediction=[]
num_tweets_used=[]

for name in df["Username"]:
  if name not in pre_user:
    bert_age_prediction.append(None)
    num_tweets_used.append(None)
  else:
    inx = pre_user.index(name)
    if predict[inx]==1:
      ans = ">=21"
    else:
      ans = "<21"
    bert_age_prediction.append(ans)
    num_tweets_used.append(len(tw_json[name]))

df["bert.age.prediction"] = bert_age_prediction
df["num.tweets.used.bert.prediction"] = num_tweets_used
 
df.to_csv('Twitter_user_handles_to_prediction.csv', index=True, header=True)


df
