var TelegramBotClient = require('telegram-bot-client');
var client = new TelegramBotClient(process.env.TELEGRAM_API_TOKEN);

module.exports = client;
