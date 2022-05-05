// 1: Created an action function selectCity
// 2: Take the city as parameter (on click)
// 3: Action type is CITY_SELECTED and payload is the city
// 4: The action is then returned to the reducers
// => See reducers/active_city_reducer
export default function selectCity(city) {
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
}
