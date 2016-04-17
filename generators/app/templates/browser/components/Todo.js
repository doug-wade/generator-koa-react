import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

let Todo = ({ dispatch, todo }) => {
  let done;

  return (
    <div>
      <p><a href={todo.link}>{todo.name}</a></p>
      <input
        type="checkbox"
        defaultValue={todo.done}
        ref={node => {
          done = node;
        }}
        onClick={ () => dispatch(toggleTodo({id: todo.id, done: done.value})) } />
    </div>
  );
};

Todo.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  todo: React.PropTypes.shape({
    name: React.PropTypes.string,
    done: React.PropTypes.bool,
    id: React.PropTypes.string,
    link: React.PropTypes.string
  })
};

Todo = connect()(Todo);

export default Todo;
