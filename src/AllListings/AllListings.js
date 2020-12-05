import React, { useCallback, useEffect, useState } from 'react';
import './AllListings.css';
import OneListing from '../OneListing/OneListing';
import FoodTruckContext from '../FoodTruckContext';

function AllListings() {
  const foodTruckUrl = 'https://data.sfgov.org/resource/rqzj-sfat.json';
  let [foodTrucks, setFoodTrucks] = useState('');

  const fetchFoodTrucks = useCallback(() => {
    fetch(foodTruckUrl, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => Promise.reject(error));
        }
        return response.json();
      })
      .then((responseJson) => setFoodTrucks(responseJson))
      .catch((error) => {
        console.error('Sorry, no food trucks available!');
      });
  }, []);

  useEffect(() => {
    fetchFoodTrucks();
  }, [fetchFoodTrucks]);

  return (
    <div className='allListings'>
      <FoodTruckContext.Provider value={foodTrucks}>
        <OneListing />
      </FoodTruckContext.Provider>
    </div>
  );
}

export default AllListings;
