import React, { useEffect, useState } from 'react';
import './Map.css';
import { InfoWindow, GoogleMap, Marker } from '@react-google-maps/api';
import { GoogleApiWrapper } from 'google-maps-react';
import styles from '../GoogleMapStyles.json';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '90vh',
  position: 'static',
};

const center = {
  lat: 37.763972,
  lng: -122.441297,
};

let page = 0;

function Map() {
  const [foodTrucks, setFoodTrucks] = useState([]);
  const [infoWindow, setInfoWindow] = useState(null);

  const onSetInfoWindow = (foodTruck) => {
    setInfoWindow(foodTruck);
  };

  const handleFetch = (page) => {
    const url = `https://data.sfgov.org/resource/rqzj-sfat.json?$limit=50&$offset=${
      (page + 1) * 50
    }`;
    async function fetchFoodTruckData() {
      const result = await axios(url);
      setFoodTrucks(result.data);
    }

    return fetchFoodTruckData();
  };

  useEffect(() => {
    handleFetch(page);
  }, []);

  return (
    <GoogleMap
      googleMapUrl='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key='
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      options={{ styles: styles }}
      class='googleMap'
    >
      {foodTrucks.map((foodTruck, index) => {
        return (
          <Marker
            key={foodTruck.permit + index}
            position={{
              lat: parseFloat(foodTruck.latitude),
              lng: parseFloat(foodTruck.longitude),
            }}
            onLoad={(marker) => {
              const customIcon = (opts) =>
                Object.assign(
                  {
                    path:
                      'M172.268 501.67C26.97 291.031 0 269.413 0 192C0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67c-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80s-80 35.817-80 80s35.817 80 80 80z',
                    fillColor: '#34495e',
                    fillOpacity: 1,
                    strokeColor: '#000',
                    strokeWeight: 1,
                    scale: 0.06,
                  },
                  opts
                );

              marker.setIcon(
                customIcon({
                  fillColor: '#576775',
                  strokeColor: 'white',
                })
              );
            }}
            onClick={() => {
              onSetInfoWindow(foodTruck);
            }}
          />
        );
      })}

      {infoWindow && (
        <InfoWindow
          clickable={true}
          onCloseClick={() => {
            setInfoWindow(null);
          }}
          position={{
            lat: parseFloat(infoWindow.latitude) - 0.002,
            lng: parseFloat(infoWindow.longitude) + 0.002,
          }}
        >
          <div className='foodTruckInfo'>
            <h2 className='foodTruckName'>
              {infoWindow.applicant.toLowerCase()}
            </h2>
            <hr style={{ width: '80%' }} color={'#bf5d54'} />
            <hr style={{ width: '70%' }} color={'#bf5d54'} />
            <p className='foodTruckAddress'>
              Address: {infoWindow.address.toLowerCase()}
            </p>
            <p className='foodItems'>
              {infoWindow.fooditems
                ? 'Menu items include: ' +
                  infoWindow.fooditems.replace(/:/g, ',')
                : ''}
            </p>
            <p className='foodTruckHours'>
              {infoWindow.dayshours ? 'Hours: ' + infoWindow.dayshours : ''}
            </p>
          </div>
        </InfoWindow>
      )}
      <div className='paginate'>
        <button
          className='leftArrow'
          aria-label='page left'
          onClick={() => {
            page > 0 ? handleFetch(--page) : handleFetch(page);
            setInfoWindow(null);
          }}
        >
          <p className='arrowLeftIcon'></p>
        </button>
        <button
          className='rightArrow'
          aria-label='page right'
          onClick={() => {
            page < 13 ? handleFetch(++page) : handleFetch(page);
            setInfoWindow(null);
          }}
        >
          <p className='arrowRightIcon'></p>
        </button>
      </div>
    </GoogleMap>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD5-3ZGgtuwr7k9FbfW34NkgqZSdONWgEU',
})(Map);
