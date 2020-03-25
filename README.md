# MtcUnilag_OrderBot

This is a basic bot takes orders in simple steps designed by the ChatBots user group of Microsoft Tech Community Unilag (MTC Unilag)

## Prerequisites

- [Node.js](https://nodejs.org) version 10.14 or higher

  ```bash
  # determine node version
  node --version
  ```

- botbuilder emulator

  [Bot Framework Emulator Downnload](https://github.com/Microsoft/BotFramework-Emulator/releases/tag/v4.8.1)

# Getting starting (Learners)

Install all libraries required

- botbuilder
- restify
- dotenv

  ```terminal
  npm install --save botbuilder@3.13.1 restify dotenv
  ```

## Procedure

- create a file named "app.js" in the root directory

- import third party dependencies

  ```code
  var botbuilder = require("botbuilder");
  var restify = require("restify");
  ```

- Setup Restify Server

  ```code
  var server = restify.createServer();

  server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log("%s listening.....", server.name);
  });
  ```

- Create Chat Bot

  ```code
  var connector = new botbuilder.ChatConnector({
  appId: '',
  appPassword: ''
  });
  ```

  ```code
  var inMemoryStorage = new botbuilder.MemoryBotStorage();
  var bot = new botbuilder.UniversalBot(connector, session => {
  session.beginDialog("/welcome");
  }).set("storage", inMemoryStorage);
  server.post("/api/messages", connector.listen());
  ```

- Bot Dialogs

  ```code
  bot.dialog("/welcome", [
  session => {
    botbuilder.Prompts.text(
      session,
      "Hello! welcome to our MTC Unilag Order Bot"
    );
  }
  ]);
  ```
