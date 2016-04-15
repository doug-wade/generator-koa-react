import logger from './logger';
import db from './db';

/**
 * Registers routes on the router.
 *
 * @param {Object} router the koa router object.
 */
export default function register(router) {
  router.post('/todo', upsert);
  router.get('/todo/:id', get);
  router.get('/todo', getAll);
}

/**
 * Creates or updates a todo.
 *
 * @example
 *     POST /todo/
 *     body:
 *     {
 *       "name": "koa",
 *       "link": "https://koajs.com",
 *       "done": false
 *     }
 */
function upsert(ctx, next) {
  const todo = ctx.request.body;
  logger.info(`upserting todo ${JSON.stringify(todo)}`);

  if (todo.id && db.getTodo(todo)) {
    ctx.body = db.updateTodo(todo);
  } else {
    ctx.body = db.addTodo(todo);
  }
  return next();
}


/**
 * Gets a todo.
 *
 * @example
 *     GET /application/3a4d4c98-2bd8-49fe-a499-3d6bf3ead111
 *     returns:
 *     {
 *       "name": "koa",
 *       "link": "https://koajs.com",
 *       "done": false,
 *       "id": "3a4d4c98-2bd8-49fe-a499-3d6bf3ead111"
 *     }
 */
function get(ctx, next) {
  const id = ctx.params.id;
  logger.info(`getting todo by ${id}`);
  const todo = db.getTodo(id);
  if (!todo) {
    logger.warn(`Could not find todo with id ${id}`)
    ctx.body = {};
  } else {
    logger.info(`Got todo ${JSON.stringify(todo)}`)
    ctx.body = todo;
  }
  return next();
}

/**
 * Gets all todos.
 *
 * @example
 *     GET /application
 *     returns:
 *     [{
 *       "name": "koa",
 *       "link": "https://koajs.com",
 *       "done": false,
 *       "id": "3a4d4c98-2bd8-49fe-a499-3d6bf3ead111"
 *     }, {
 *       "name": "react",
 *       "link": "https://facebook.github.io/react/",
 *       "done": false,
 *       "id": "a4d442db-f71d-4a0c-812a-b485605fff71"
 *     }]
 */
function getAll(ctx, next) {
  logger.info('geting all todos');
  ctx.body = db.getTodos();
  return next();
}
