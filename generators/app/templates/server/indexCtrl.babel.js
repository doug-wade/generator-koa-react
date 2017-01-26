import logger from './logger';
import db from './db';

/**
 * Registers the index route on the router.
 *
 * @param {Object} router the koa router object.
 */
export default function register(router) {
  router.get('/', index);
}

function index(ctx, next) {
  logger.info('got request to /');
  const todos =  db.getTodos();
  logger.info(`got initial todos ${JSON.stringify(todos)}`);
  ctx.render('index', { initialData: JSON.stringify({ todos, excitement: 0 }).replace(/"/gi, "'") }, true);
}
