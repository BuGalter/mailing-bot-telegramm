import { config, } from 'dotenv';

config();

export default {
  token: process.env.TOKEN as string,
};
