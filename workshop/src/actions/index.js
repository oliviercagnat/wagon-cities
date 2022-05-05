// Actions are payloads(Javascript object) of information that send data from your application to your store.
// They are the only source of information for the store.

// 1: Created an action function selectCity
// 2: Two arguments are passed to the reducer: the current state and the action.
// 3: Take the city as parameter (on click)
// 4: Action type is CITY_SELECTED and payload is the city
// 5: The action is then returned to the reducers
// => See reducers/active_city_reducer
export default function selectCity(city) {
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
}
