The goal of this repo is to predict the ages of some Instagram accounts.

The main email that started it is: https://mail.google.com/mail/u/1/#inbox/QgrcJHsNhNbrXmlxKvlhrdNFPvjhXnnNMFq

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

# Where to find various pieces of data to be used in API requests

`User-Agent` can be simply copied off chrome dev tools.
`X-CSRFToken` is found in `window._sharedData`.

## `X-IG-APP-ID`
should be in the script element with the following attributes.
```json
{
    "type": "text/javascript",
    "src": "/static/bundles/es6/ConsumerLibCommons.js/7bed7be79f06.js",
    "crossorigin": "anonymous"
}
```
And it should be there like the following:
`(e.instagramWebDesktopFBAppId = "936619743392459"),`

## `X-ASBD-iD`
should be able to be found from `e.ASBD_ID = [0-9]+` ( note that that's a
python regex)

`X-IG-WWW-Claim` is read from the cookie set by the key `www-claim-v2`, but that cookie
itself is set manually via JS, and the JS that sets it gets it from a header.
