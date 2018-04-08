export default function application(state = { excitement: 0, todos: [] }, action) {
  let newState;
  switch (action.type) {
  case 'GET_EXCITED': {
    newState = Object.assign({}, state, {
      excitement: state.excitement += 1
    });
    break;
  }
  case 'ADD_TODO': {
    let newTodos = state.todos;
    newTodos.push({name: action.name, link: action.link});
    newState = Object.assign({}, state, {
      todos: newTodos
    });
    break;
  }
  case 'TOGGLE_TODO': {
    let todos = state.todos.filter(todo => todo.id !== action.id);
    newState = Object.assign({}, state, {
      todos
    });
    break;
  }
  default: {
    newState = state;
  }
  }
  return newState;
}
