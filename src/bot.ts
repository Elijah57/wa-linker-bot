import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import express from "express"

dotenv.config()

const app = express();
const token: string = process.env.API_TOKEN;
const PORT: number = 3000;

const bot = new TelegramBot(token, {polling: true})

const welcomeMsg: string = "Welcome to the Bot! Use /start to begin";
const prefix = "https://wa.me/+234";

bot.onText(/\/start/, (msg: TelegramBot.Message)=>{
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Type in a phone number and i will give you a whatsapp link to number")
})

bot.on("message", (msg: TelegramBot.Message)=>{
    const chatId = msg.chat.id;
    const userInput = msg.text;

    
    if (userInput?.length !== 11){
        bot.sendMessage(chatId, "Phone number should be 11 numbers")
    }

    const phone_num = userInput?.slice(1,);

    const wa_link = prefix + phone_num;

    if (userInput?.length == 11){
        bot.sendMessage(chatId, wa_link)
    }
    



})


app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
});