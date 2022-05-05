import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectCity from '../actions/index';

// 1: We want to access the SelectCity method inside Action
// -1: import the bindActionCreators from redux.
// -2: import the connect from react-redux which will be usefull at the bottom when export the City.
// -3: implement a mapDispatchToProps function which basically bind actions to the props of the components.
// -4: no need to implement here a mapStateToProps, we won't listen to the action state here
// but inside the active_city.jsx
// => See actions/index.js
const City = (props) => {
  return (
    <li
      className="list-group-item"
      onClick={() => props.selectCity(props.city)}
    >{props.city.name}</li>
  );
};

function mapDispatchToProps(dispatch) {
  // here bind the action to the props of the component.
  return bindActionCreators(
    { selectCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
