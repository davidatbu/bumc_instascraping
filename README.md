# The location of files
- The scraped Instagram users are found in
`/projectnb/llamagrp/davidat/bumc_instascraping/scraped_users/`.

Note that scraping is not yet complete because despite writing a new Instagram scraper
by reverse engineering, Instagram keeps blocking the scraping after some time.

- The trained model is found at:
`/projectnb/llamagrp/davidat/bumc_instascraping/model_out_dir/finetuned_model.pth`.

- The predictions for instagram users whose scrapping was finished is found at:
`/projectnb/llamagrp/davidat/bumc_instascraping/predictions.csv`.

# Installing the requirements and the repo
This repo uses [poetry](https://github.com/python-poetry/poetry) to handle dependencies. To install poetry if you don't have
it, please run:


```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/install-poetry.py | python -
```

After cloning this repo, please run:

```bash
poetry install
poetry shell
````

This will create a virtual environment, install the required python libraries, and
activate the virtual environment.


# Regarding data collection

Instagram is very hard to scrape because the company has no official API, and they very
actively puts up many obstacles to reverse engineering their API, including rate
limiting, and requiring face recognition verification if one uses an account to do the
scraping.

I tried many scraping libraries on Github, but ended up writing my own. The scraper has
some features to help get around Instagram's limitations.  This is the output of running
`python -m bumc_instascraping scrape-users --help`:

```
Options:
  --user-file PATH                A file with one instagram user on each line.
                                  [required]

  --output-dir PATH               The directory where the output JSON files
                                  will be.  [required]

  --posts-per-user INTEGER        How many posts to scrape per user.
                                  [default: 100]

  --backoff-mult FLOAT            If you want to retry failed requests
                                  exponential backoff, set this option as well
                                  as the --backoff-exp option. For example
                                  --backoff-mult 2 --backoff-exp 3 would start
                                  exponential backoff that would initially
                                  wait 2 seconds to retry, and then if the
                                  same request failed 2^3 = 8 seconds, and
                                  then 8^3 = 192 seconds.

  --backoff-exp FLOAT             Look at the documentation for the --backoff-
                                  mult option.

  --ratelimit TEXT                You can specify multiple rate limits. You
                                  specify them in this format:
                                  <number_of_calls>,<number_of_seconds.
                                  Therefore, --ratelimit 5,60 would place a
                                  limitation of a maximum of 5 API calls in
                                  any 60 second block.  [default: ]

  --useproxies / --no-useproxies  If you set this, the code will automatically
                                  fetch proxy server IP addresses and try to
                                  use them. This hasn't proven effective in my
                                  experience because (most likely) Instagram
                                  blocks proxy IP addresses somehow.
                                  [default: False]

  --help                          Show this message and exit.
```

Below are the recommended arguments to pass while starting / continuing a scraping session.

```bash
python -m bumc_instascraping  scrape-users \
    --user-file /projectnb/llamagrp/davidat/bumc_instascraping/valid\ users.csv \
    --output-dir /projectnb/llamagrp/davidat/bumc_instascraping/scraped_users \
    --ratelimit 1,30 --ratelimit 60,3600 \
    --posts-per-user 100 
```

# Training 
The architecture used was a BERT backbone with two linear layers on top. The output of
the last four layers of BERT was used, and only that of the `[CLS]` token. For each
user, the `[CLS]` output for the last four layers was averaged across all the tweets of
the user.

That means that the first linear layer had 3072 input gates (since BERT's hidden size is 768).
The second linear layer had 384 input gates.  THere was a GELU activation between the
first and second linear layer. Binary cross entropy loss was used to train after passing
the output of the second layer through the sigmoid function.

The best model trained achieved a validation accuracy of: 73.9%.


It was trained with the following hyperparameters.

    learn_rate=2e-5,
    epoch_num=10,
    max_seq_len=18,
    print_step=100,
    seed=2021,
    accumulation_steps=10,
    model_name_or_path='bert-base-uncased'


## How to actually train(ie, the command)
One would type in `python -m bumc_instascraping train [OPTIONS AS SPECIFIED BELOW]` in
bash to train a model.

```
  --max-seq-len INTEGER         [default: 18]
  --print-step INTEGER          [default: 100]
  --seed INTEGER                [default: 2021]
  --accumulation-steps INTEGER  Steps to accumulate loss before doing backward
                                prop.  [default: 10]

  --model-name-or-path TEXT     The HuggingFace model name to use. Usually,
                                'bert-base-uncased'.  [default: bert-base-
                                uncased]

  --finetuned-model-name TEXT   The name of the file that will have the
                                weights of the model.  [default:
                                finetuned_model.pth]

  --age-cutoff INTEGER          [default: 21]
  --device [cpu|cuda]           [default: Device.cpu]
  --help                        Show this message and exit.
  ```


# Predicting
Similarly, to predict, you'd run `python -m bumc_instascraping predict [OPTIONS AS SPECIFIED BELOW]`.


```
  --input-dir PATH               The directory containing the scraped JSON
                                 files.  [required]

  --finetuned-model-path PATH    The filename of the saved, trained model.
                                 [required]

  --prediction-output-file PATH  The filie path to which predictions for each
                                 user will be written.  [required]

  --max-seq-len INTEGER          [default: 18]
  --device [cpu|cuda]            [default: Device.cpu]
  --age-cutoff INTEGER           [default: 21]
  --model-name-or-path TEXT      The HuggingFace model name that was used.
                                 Usually, 'bert-base-uncased'.  [default:
                                 bert-base-uncased]

  --help                         Show this message and exit.
```
