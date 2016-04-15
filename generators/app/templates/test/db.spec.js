import db from '../build/db';
import test from 'ava';

const todo = { name: 'drink beer', link: 'http://www.fremontbrewing.com/', done: false };

test(t => {
  const todos = db.getTodos();
  db.addTodo(todo);

  t.is(Object.keys(todos).length + 1, Object.keys(db.getTodos()).length);
});

test(t => {
  const todos = db.getTodos();
  db.completeTodo(Object.keys(todos)[0]);

  t.is(Object.keys(todos).length - 1, Object.keys(db.getTodos()).length);
});

test(t => {
  t.plan(3);
  const todos = db.getTodos();
  todo.id = Object.keys(todos)[0];
  db.updateTodo(todo);
  const updated = db.getTodo(Object.keys(todos)[0]);

  t.is(todo.name, updated.name);
  t.is(todo.link, updated.link);
  t.is(todo.done, updated.done);
});
