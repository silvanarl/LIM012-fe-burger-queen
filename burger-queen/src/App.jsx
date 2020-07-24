import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import PlaceAndViewOrders from './Components/Waiter-choice';

const App = () => (
  <div className="">
    <Route
      path="/home"
      render={() => {
        <Home />;
      }}
    />
  </div>
);

export default App;
