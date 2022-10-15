import { Telegraf, } from 'telegraf';
import config from './config/config';

if (config.token === undefined) {
  throw new Error('BOT_TOKEN must be provided!');
}

const bot = new Telegraf(config.token);

export default bot;
