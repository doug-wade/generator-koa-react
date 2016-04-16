const Koa = require('koa');
const app = new Koa();

import 'babel-polyfill';
import serve from 'koa-static';
import bunyan from 'koa-bunyan';
import logger from './logger';

app.use(bunyan(logger, {
  level: 'info',
  timeLimit: 250
}));

app.use(serve('public/'));

app.listen(3000);
