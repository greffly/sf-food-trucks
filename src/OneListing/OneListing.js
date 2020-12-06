import React, { Component } from 'react';
import FoodTruckContext from '../FoodTruckContext';
import './OneListing.css';

class OneListing extends Component {
  static contextType = FoodTruckContext;

  constructor(props) {
    super(props);
    this.state = {
      foodtrucks: [],
      error: null,
    };
  }

  render() {
    return (
      <FoodTruckContext.Consumer>
        {(context) => (
          <li className='listing' id={this.props.permit}>
            {console.log('context', context)}
            {console.log('food truck', this.props)}
            <h1 className='listingTitle'>
              {context ? 'this.props.name.toLowerCase()' : ''}
            </h1>
            <p className='listingAddress'>
              {context ? 'this.props.address' : ''}
            </p>
          </li>
        )}
      </FoodTruckContext.Consumer>
    );
  }
}

export default OneListing;
