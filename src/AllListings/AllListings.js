import React, { Component } from 'react';
import './AllListings.css';
import OneListing from '../OneListing/OneListing';
import FoodTruckContext from '../FoodTruckContext';

export default class AllListings extends Component {
  foodTruckUrl = 'https://data.sfgov.org/resource/rqzj-sfat.json';

  constructor(props) {
    super(props);
    this.state = {
      foodTrucks: [],
      error: null,
    };
  }

  setFoodTrucks = (foodTrucks) => {
    this.setState({
      foodTrucks,
      error: null,
    });
  };

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {}

  getData = () => {
    fetch(this.foodTruckUrl)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => Promise.reject(error));
        }
        return response.json();
      })
      .then((responseJson) => this.setFoodTrucks(responseJson))
      .catch((error) => {
        console.error('Sorry, no food trucks available!');
        this.setState({ error });
      });
  };

  render() {
    const foodTruckData = {
      foodTrucks: this.state.foodTrucks,
    };
    return (
      <div className='allListings'>
        <FoodTruckContext.Provider value={foodTruckData}>
          <OneListing />
        </FoodTruckContext.Provider>
      </div>
    );
  }
}
