const TelegramBot = require(`node-telegram-bot-api`); //импорт библиотеки

const token = "6050643505:AAGe2TD7HDpEeFXh-dRYS4LCoBCRvsSJ6BI";

const bot = new TelegramBot(token, {polling: true});

bot.on(`message`, msg => {
    const {id: id, first_name: userName} = msg.chat;

    if (/Привет/gi.test(msg.text)){
        bot.sendMessage(id,  `Привет ${userName}`);
    }
})