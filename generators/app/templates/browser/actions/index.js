export const getExcited = () => {
  return { type: 'GET_EXCITED' };
};
export const addTodo = ({ name, link }) => {
  return { type: 'ADD_TODO', name, link };
};

export const toggleTodo = ({ id, done }) => {
  return { type: 'TOGGLE_TODO', id, done };
};
