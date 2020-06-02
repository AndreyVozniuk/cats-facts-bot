process.env["NTBA_FIX_319"] = 1

const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1164742853:AAGUgHg7GgptKXROoccs45B-iU3IdjjLa48'

const bot = new TelegramBot(TOKEN, {
    polling: true
})

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}`)
})