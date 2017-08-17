export const counter = (state = {int: 0}, action) => {
  
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        count: state.int + 1,
      });
    case 'DECREMENT':
      return Object.assign({}, state, {
        count: state.int - 1,
      });
    default:
      return state
  }
}
