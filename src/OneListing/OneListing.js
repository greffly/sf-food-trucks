import React, { Component } from 'react';
import FoodTruckContext from '../FoodTruckContext';
import './OneListing.css';

class OneListing extends Component {
  render() {
    // I should identify them by permit number, those should be unique
    return (
      <FoodTruckContext.Consumer>
        {(context) => (
          <div className='listing'>
            {console.log(context.foodTrucks)}
            <h1 className='listingTitle'>{context.foodTrucks[0].applicant}</h1>
            <p className='listingAddress'>{context.foodTrucks[0].address}</p>
          </div>
        )}
      </FoodTruckContext.Consumer>
    );
  }
}

export default OneListing;
