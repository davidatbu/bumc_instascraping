The goal of this repo is to predict the ages of some Instagram accounts.

The main email that started it is: https://mail.google.com/mail/u/0/#inbox/QgrcJHsNhNbrXmlxKvlhrdNFPvjhXnnNMFq

# How it's going
Ok, right now, I'm doing


```bash
cat ~/Downloads/valid_users.csv |
  while read line; do
    echo trying "$line";
    instagram-scraper \
      --login-user morphologicaldichotomy --login-pass 'AW&hj$dKedtbDd'  \
      --media-metadata --media-types none -m 100 --profile-metadata \
      "$line";
    to_sleep=$(($RANDOM % 6 + 30));
    echo "will sleep for $to_sleep secs";
    sleep $to_sleep;
  done
```

The decision to wait 30 seconds comes from: https://github.com/realsirjoe/instagram-scraper#recommended-limits
