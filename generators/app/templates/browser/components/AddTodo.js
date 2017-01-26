import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let nameInput;
  let linkInput;

  return (
    <div>
      <h2>Add Todo</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={node => {
            nameInput = node;
          }}
          className="todo-name"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="link">Link</label>
        <input
          type="text"
          ref={node => {
            linkInput = node;
          }}
          className="todo-link"
          id="link"
        />
      </div>
      <button onClick={() => dispatch(addTodo({name: nameInput.value, link: linkInput.value}))}>Submit</button>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

AddTodo = connect()(AddTodo);

export default AddTodo;
