import React, { useCallback, useEffect, useState } from 'react';
import './Map.css';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from '@react-google-maps/api';
import { GoogleApiWrapper } from 'google-maps-react';
import styles from '../GoogleMapStyles.json';
import { render } from 'react-dom';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 37.763972,
  lng: -122.441297,
};

function Map() {
  const [foodTrucks, setFoodTrucks] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchFoodTrucks() {
      const result = await axios(
        'https://data.sfgov.org/resource/rqzj-sfat.json?$limit=10'
      );
      if (!ignore) setFoodTrucks(result.data);
    }

    fetchFoodTrucks();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <GoogleMap
      googleMapUrl='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD5-3ZGgtuwr7k9FbfW34NkgqZSdONWgEU'
      apiKey='AIzaSyD5-3ZGgtuwr7k9FbfW34NkgqZSdONWgEU'
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      options={{ styles: styles }}
    >
      {foodTrucks.map((foodTruck, index) => {
        console.log(parseInt(foodTruck.latitude));
        return (
          <Marker
            key={foodTruck.permit + index}
            position={{
              lat: parseFloat(foodTruck.latitude),
              lng: parseFloat(foodTruck.longitude),
            }}
          />
        );
      })}
    </GoogleMap>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD5-3ZGgtuwr7k9FbfW34NkgqZSdONWgEU',
})(Map);
