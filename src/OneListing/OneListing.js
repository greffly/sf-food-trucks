import React, { Component } from 'react';
import FoodTruckContext from '../FoodTruckContext';
import './OneListing.css';

class OneListing extends Component {
  static contextType = FoodTruckContext;

  constructor() {
    super();
    this.state = {
      foodtrucks: [],
      error: null,
    };
  }

  render() {
    return (
      <FoodTruckContext.Consumer>
        {(context) => (
          <div className='listing'>
            {console.log('context', context)}
            <h1 className='listingTitle'>
              {context ? context[0].applicant : ''}
            </h1>
            <p className='listingAddress'>
              {context ? context[0].address : ''}
            </p>
          </div>
        )}
      </FoodTruckContext.Consumer>
    );
  }
}

export default OneListing;
