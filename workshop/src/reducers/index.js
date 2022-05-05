import { combineReducers } from 'redux';
import CitiesReducer from './cities_reducer';
import ActiveCityReducer from './active_city_reducer';

// 1: We combine both reducers (cities_reducer and active_city_reducer)
// so we can send them as one Reducer containing both to src/index.jsx
// => See cities_reducer

// We create one reducer combining all reducers.
// Create one reducers for all the Redux State tree.
const rootReducer = combineReducers({
  // cities is basically the Redux State tree here
  // Later we add also the activeCity reducer
  cities: CitiesReducer,
  // Here we add the activeCity reducer.
  activeCity: ActiveCityReducer

});

export default rootReducer;
