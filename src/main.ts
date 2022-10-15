import { Telegraf, } from 'telegraf';
import bot from './bot';

console.log('Bot start!');
bot.use(Telegraf.log());
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
