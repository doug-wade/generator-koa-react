export default function application(state = { excitement: 0 }, action) {
  let newState;
  switch (action.type) {
  case 'GET_EXCITED': {
    newState = Object.assign({}, state, {
      excitement: state.excitement += 1
    });
    break;
  }
  default: {
    newState = state;
  }
  }
  return newState;
}
