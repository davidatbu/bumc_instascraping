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
some features to help get around Instagram's limitations. 


# Training 
The architecture used was a BERT backbone with two linear layers on top. The output of
the last four layers of BERT was used, and only that of the `[CLS]` token. That means
that the first linear layer had 3072 input gates (since BERT's hidden size is 768).
The second linear layer had 384 input gates.  THere was a GELU activation between the
first and second linear layer. Binary cross entropy loss was used to train after passing
the output of the second layer through the sigmoid function. Here is the most critical
piece of code that defines the architecture.



The best model trained achieved a validation accuracy of: 69.3%.

It was trained with the following hyperparameters.

    learn_rate=2e-5,
    epoch_num=10,
    max_seq_len=18,
    print_step=100,
    seed=2021,
    accumulation_steps=10,
    model_name_or_path='bert-base-uncased'


