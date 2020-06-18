process.env['NTBA_FIX_319'] = 1 // for work bot without exceptions

const TelegramBot = require('node-telegram-bot-api')
const fs = require('fs')
const helpers = require('./helpers')
const TOKEN = fs.readFileSync('./token.txt', 'utf8')
const catsService = require('./catsService')

helpers.botStarted()

const bot = new TelegramBot(TOKEN, { polling: true })

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}, the bot is under development, he will be great, just wait =)`)
})

bot.onText(/\/fact/, (msg) => {
  catsService.getFact().then(({ text }) => {
    bot.sendMessage(msg.chat.id, text)
  })
})

bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, `For any questions or suggestions you can write to @AndrushaV`)
})
