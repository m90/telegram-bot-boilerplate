# telegram-bot-boilerplate
> example application showing how to set up a [Telegram](https://telegram.org/) chatbot using the [telegram-bot-client](https://github.com/m90/telegram-bot-client) library and [express.js](https://github.com/expressjs/express)

[![Build Status](https://travis-ci.org/m90/telegram-bot-boilerplate.svg?branch=master)](https://travis-ci.org/m90/telegram-bot-boilerplate)

---

This repository shows how to set up a simple Telegram chatbot using Node.js. The bot is **not** using polling but is [listening to a webhook](https://core.telegram.org/bots/api#getting-updates). Currently the bot will simply answer each message with the string `I'm a bot, so what?`, but I am sure you will be able to build even more awesome things with it.

---

### Installation:

Clone the repository:
```sh
$ git clone git@github.com:m90/telegram-bot-boilerplate.git
```

Install the dependencies:
```sh
$ npm install
```

Set the needed environment variables: 
```sh
$ export TELEGRAM_API_TOKEN=<YOUR_BOT_API_TOKEN>
$ export BASE_URL=<BASE_URL_OF_YOUR_APPLICATION>
$ export WEBHOOK_TOKEN=<OPTIONAL_TOKEN_IDENTIFYING_THE_URL_OF_YOUR_WEBHOOK>
```

### Start the application:
```sh
$ npm start
```

### Run the tests:
```sh
$ npm test
```

### License
MIT © [Frederik Ring](http://www.frederikring.com)
