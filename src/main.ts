import { Telegraf, Markup, } from 'telegraf';
import bot from './bot';

console.log('Bot start!');
bot.use(Telegraf.log());

const keyboardUser = Markup.inlineKeyboard([
  [
    Markup.button.callback('Информация о боте', 'botInfo'),
    Markup.button.callback('Подписка на рассылку', 'subscribe')
  ],
  [
    Markup.button.callback('Отписаться от рассылки', 'unSubscribe'),
    Markup.button.callback('Выход', 'quit')
  ]
]);

const keyboardAdmin = Markup.inlineKeyboard([
  [
    Markup.button.callback('Информация о боте', 'botInfo'),
    Markup.button.callback('Создать сообщение', 'createMessage')
  ],
  [
    Markup.button.callback('Начать рассылку', 'startMailing'),
    Markup.button.callback('Выход', 'quit')
  ]
]);

bot.start(async (ctx) => {
  await ctx.reply(`Это чат-бот группы:\n 
набери /user если ты пользователь группы.\n
набери /admin если ты администратор группы.`);
});

bot.command('user', async (ctx) => {
  await ctx.reply('Меню пользователя', keyboardUser);
});

bot.command('admin', async (ctx) => {
  await ctx.reply('Меню администратора', keyboardAdmin);
});

bot.action('botInfo', async (ctx) => {
  await ctx.reply('Bot info');
});

bot.action('quit', async (ctx) => {
  await ctx.reply('Спасибо, что использовали бота!');
});

bot.action('subscribe', async (ctx) => {
  await ctx.reply('Спасибо, что подписались на рассылку!');
});

bot.action('unSubscribe', async (ctx) => {
  await ctx.reply('Спасибо, что отписались от рассылки!');
});

bot.action('createMessage', async (ctx) => {
  await ctx.reply('Введите текст сообщения для рассылки:');
});

bot.action('startMailing', async (ctx) => {
  await ctx.reply('Отправляем!');
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
