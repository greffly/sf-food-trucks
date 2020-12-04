import React from 'react';
import './Map.css';
import { GoogleMap } from '@react-google-maps/api';
import { GoogleApiWrapper } from 'google-maps-react';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 37.763972,
  lng: -122.431297,
};

export class MapContainer extends React.Component {
  render() {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      ></GoogleMap>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD5-3ZGgtuwr7k9FbfW34NkgqZSdONWgEU',
})(MapContainer);
