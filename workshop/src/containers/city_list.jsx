import React, { Component } from 'react';
import City from './city';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// 1: We create the class Component CityList.
// 2: We mapStateToProps in order to wire this.props.state to the Redux state Store.
// 3: We connect our class to mapStateToProps so we are connected to the Reducers
// See reducers/index.js
// 4: Now that we received the State and filled it with cities so we can use it in the renderList()
// See city.jsx
class CityList extends Component {

  // Render function to map through the cities list
  renderList() {
    return this.props.cities.map((city) => {
      return (
        <City key={city.name} city={city} />
      );
    });
  };

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
    );
  }
}


// With this function, we wire this.props.state to the reduc state Store.
// it means map ReduxState to Props.
// Here we link the Redux store to the props.

// in state you receive the ReduxState,
// And you return the props you want to update.
// Here the cities.
// The function should then be passed to the connect function below.
function mapStateToProps(state) {
  return {
    // Here it has direct access to the return of the CitiesList class,
    // to the this.props.cities
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);
