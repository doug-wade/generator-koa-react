import test from 'ava';
import request from 'supertest-as-promised';
import app from '../build/app';

test('todo:GetAll', async t => {
    t.plan(2);

    const res = await request(app)
        .get('/todo')
        .send();

    const todos = res.body;

    t.is(res.status, 200, 'gets a 200 response');
    t.true(Object.keys(todos).length > 0, 'returns todos');
});

test('todo:Get', async t => {
    t.plan(4);

    const allRes = await request(app)
        .get('/todo')
        .send();

    const todos = allRes.body;
    const id = Object.keys(todos)[0];

    const res = await request(app)
        .get('/todo/' + id)
        .send();

    t.is(res.status, 200, 'gets a 200 response');

    const todo = res.body;

    t.is(todo.name, todos[id].name, 'has the same name');
    t.is(todo.link, todos[id].link, 'has the same link');
    t.is(todo.done, todos[id].done, 'has the same done');
});

test('todo:Post', async t => {
    t.plan(2);

    const fixture = { name: 'drink beer', link: 'http://www.fremontbrewing.com/', done: false };
    const postRes = await request(app)
        .post('/todo')
        .send();

    const todo = postRes.body;

    const res = await request(app)
        .get('/todo')
        .send({ id: todo.id });

    t.is(postRes.status, 200, 'the post gets a 200 response');
    t.is(res.status, 200, 'the get gets a 200 response');

    t.is(todo.name, fixture.name, 'has the same name');
    t.is(todo.link, fixture.link, 'has the same link');
    t.is(todo.done, fixture.done, 'has the same done');
});
