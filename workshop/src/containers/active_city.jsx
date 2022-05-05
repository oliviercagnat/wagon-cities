import React from 'react';
import { connect } from 'react-redux';

// 1: We connect the ActiveCity with the State through the reducer with mapStateToProps
// 2: We receive the State with activeCity and now we can access it.
// 3: If no activeCity, render "select a city"
// 4: If activeCity, displays it with the image

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  const url = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;

  return (
    <div className="active-city">
      <h3>{props.activeCity.name}</h3>
      <p>{props.activeCity.address}</p>
      <img src={url} width="100%" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
