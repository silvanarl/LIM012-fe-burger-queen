import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PlaceAndViewOrders from './Components/Waiter-choice';

const App = () => (
  <div className="">
    {/* <Home /> */}
    <PlaceAndViewOrders />
  </div>
);

export default App;
