process.env['NTBA_FIX_319'] = 1

const TelegramBot = require('node-telegram-bot-api')
const fs = require('fs')

const TOKEN = fs.readFileSync('token.txt', 'utf8')

const bot = new TelegramBot(TOKEN, {
    polling: true
})

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}`)
})