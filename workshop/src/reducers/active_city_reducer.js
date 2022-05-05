// 1: We received the action.
// 2: If CITY_SELECTED type, return the action.payload which is city
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
