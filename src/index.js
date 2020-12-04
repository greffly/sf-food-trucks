import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Header';
import Map from './Map/Map';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Map />
  </React.StrictMode>,
  document.getElementById('root')
);
