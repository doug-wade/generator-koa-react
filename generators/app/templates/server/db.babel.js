import fs from 'fs';
import path from 'path';
import uuid from 'uuid';

const dbLoc = path.join(__dirname, '..', 'db.json');
const db = JSON.parse(fs.readFileSync(dbLoc));

export default {
  addTodo: (todo) => {
    todo.id = uuid.v4();
    db[todo.id] = todo;
    write();
    return todo;
  },

  getTodo: (id) => {
    return db[id];
  },

  completeTodo: (id) => {
    db[id].done = true;
    write();
  },

  getTodos: () => {
    const incomplete = {};
    Object.keys(db).forEach((todo) => {
      if (!db[todo].done) {
        incomplete[todo] = db[todo];
      }
    });
    return incomplete;
  },

  updateTodo: (todo) => {
    db[todo.id] = todo;
    write();
    return db[todo.id];
  }
}

function write() {
  fs.writeFileSync(dbLoc, JSON.stringify(db));
}
