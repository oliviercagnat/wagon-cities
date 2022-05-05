// external librairies
import React from 'react';
import ReactDOM from 'react-dom';

// Wrap the application
import { Provider } from 'react-redux';
// Store: hold the redux state
import { createStore } from 'redux';

// We created one reducer combining all reducers.
// Create one reducers for all the Redux State tree.
import rootReducer from './reducers';

// internal librairies
import '../assets/stylesheets/application.scss';
import App from './components/App';

// 1 : We combine all the reducers into one.
// 2 : We create the Redux store with the Reducers.
// 3 : We wrap everything into the Provider. It lets you bind Redux to React
// 4 : We render on the DOM.
// => See App.jsx
ReactDOM.render(
  // Provider here wraps everything
  // we create the store
  // we pass the store to the Provider
  // But we need to pass the Reducers to the store.
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
