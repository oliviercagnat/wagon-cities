// The job of reducers is to specify how the application’s state changes in response to an action.

// 1: We received the action.
// 2: If CITY_SELECTED type, return the action.payload which is city
// 3: The output of multiple reducers is combined into a single state tree.
// 4: Now, the UI can be updated to reflect the new state.
// => See containers/active_city.jsx
export default function (state = null, action) {
  switch (action.type) {
    case 'CITY_SELECTED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
