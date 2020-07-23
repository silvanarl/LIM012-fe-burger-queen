import React from 'react';
import PropTypes from 'prop-types';
import back from '../assets/arrowBack.svg';
import logo from '../assets/title-burger-queen.svg';
import viewOrders from '../assets/checklist.svg';
import placeOrders from '../assets/listEdit.svg';
import '../App.css';

const PlaceOrders = () => (
  <div className="waiter-choice">
    <img src={placeOrders} alt="" />
  </div>
);

const ViewOrders = () => (
  <div className="waiter-choice">
    <img src={viewOrders} alt="" />
    <p>XD Waiter!</p>
  </div>
);

const PlaceAndViewOrders = () => (
  <div>
    <header className="headerMain">
      <img src={back} alt="Volver" />
      <img src={logo} alt="logo" />
    </header>
    <main className="main-PlaceAndOrders flexRow">
      <PlaceOrders />
      <ViewOrders />
    </main>
  </div>
);

export default PlaceAndViewOrders;
