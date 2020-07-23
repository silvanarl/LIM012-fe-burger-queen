import React from 'react';
// import Home from './Components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PlaceAndViewOrders from './components/waiter-choice';

const App = () => (
  <div className="">
    {/* <Home /> */}
    <PlaceAndViewOrders />
  </div>
);

export default App;
