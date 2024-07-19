"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const token = process.env.API_TOKEN;
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
const welcomeMsg = "Welcome to the Bot! Use /start to begin";
const prefix = "http://wa.me/+234";
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Type in a phone number and i will give you a whatsapp link to number");
});
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const userInput = msg.text;
    if ((userInput === null || userInput === void 0 ? void 0 : userInput.length) !== 11) {
        bot.sendMessage(chatId, "Phone number should be 11 numbers");
    }
    const phone_num = userInput === null || userInput === void 0 ? void 0 : userInput.slice(1);
    const wa_link = prefix + phone_num;
    if ((userInput === null || userInput === void 0 ? void 0 : userInput.length) == 11) {
        bot.sendMessage(chatId, wa_link);
    }
});
