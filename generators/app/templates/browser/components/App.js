import React from 'react'
import HelloWorld from './HelloWorld'
import { connect } from 'react-redux'
import Todo from './Todo';
import AddTodo from './AddTodo';

const mapStateToProps = (state) => {
  return {
    todos: [].concat(state.todos)
  };
};

let App = ({ todos }) => {
  const todolist = [];
  todos.forEach((todo) => {
     todolist.push(<Todo todo={todo} />);
   });

return (
  <div className="wrapper">
    <HelloWorld />
    <h2>Todos</h2>
    {todolist}
    <AddTodo />
  </div>
);
}

App.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    link: React.PropTypes.string
  }))
};

App = connect(mapStateToProps)(App);

export default App
