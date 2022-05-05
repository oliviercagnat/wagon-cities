import React from 'react';
import CityList from '../containers/city_list';
import ActiveCity from '../containers/active_city';


// const cities = [
//   { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
//   { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
//   { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
// ];

const App = () => {
  return (
    // 1 : we display the list of containers CityList and ActiveCity.
    // 2 : We pass no argument/props: everything is handled in the containers.
    // => See containers/city_list
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;
