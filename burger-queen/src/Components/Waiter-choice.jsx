import React from 'react';
import back from '../assets/arrowBack.svg';
import logo from '../assets/title-burger-queen.svg';
import viewOrders from '../assets/checklist.svg';
import placeOrders from '../assets/listEdit.svg';
import '../App.css';

const PlaceOrders = () => (
  <div className="waiter-choice">
    <span>REALIZAR PEDIDO</span>
    <img src={placeOrders} alt="" />
    <span>INGRESA NOMBRE</span>
    <input type="text" />
    <button type="button">CONTINUAR</button>
  </div>
);

const ViewOrders = () => (
  <div>
    <button type="button" className="waiter-choice buttonNone">
      <span>VER PEDIDOS LISTOS</span>
      <img src={viewOrders} alt="" />
    </button>
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
