import Koa from 'koa';

const app = new Koa();
const router = krouter();
const PORT = 3000;

import 'babel-polyfill';
import bodyParser from 'koa-bodyparser';
import request from 'request';
import krouter from 'koa-router';
import serve from 'koa-static';
import bunyan from 'koa-bunyan';
import logger from './logger';
import todoCtrl from './todoCtrl';
import indexCtrl from './indexCtrl';
import Pug from 'koa-pug';

const pug = new Pug({
  viewPath: './views',
  debug: false,
  pretty: false,
  compileDebug: false,
  app: app // equals to pug.use(app) and app.use(pug.middleware)
});

app.use(bunyan(logger, {
  level: 'info',
  timeLimit: 250
}));
app.use(bodyParser());

todoCtrl(router);
indexCtrl(router);

app.use(serve('public/'));
app
  .use(router.routes())
  .use(router.allowedMethods());

export default app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
