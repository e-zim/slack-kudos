# Kudos on the next-generation Slack platform
Share warm kudos and kind words with anyone in your workspace!

## Setup
Clone this repo with the Slack CLI:
```bash
slack create -t slack-samples/kudos
```

## Running it locally
```bash
slack run
```

## Deploying to Slack's Hosting
```bash
slack deploy
```

## Seeing it in action
After creating your app, create a new trigger that will start the workflow:

```bash
slack trigger create --trigger-def ./trigger.ts
```

This provides a URL that you can now paste into your Slack workspace to run the
Kudo workflow! You can also add the URL to the bookmarks bar of any channel!
