import Koa from 'koa';

const app = new Koa();
const router = krouter();

import 'babel-polyfill';
import bodyParser from 'koa-bodyparser';
import krouter from 'koa-router';
import serve from 'koa-static';
import bunyan from 'koa-bunyan';
import logger from './logger';
import todoCtrl from './todoCtrl';

app.use(bunyan(logger, {
  level: 'info',
  timeLimit: 250
}));
app.use(bodyParser());

todoCtrl(router);

app.use(serve('public/'));
app
  .use(router.routes())
  .use(router.allowedMethods());

export default app.listen(3000);
