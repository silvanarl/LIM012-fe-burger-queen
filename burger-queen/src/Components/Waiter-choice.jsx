import React from 'react';
import back from '../assets/arrowBack.svg';
import logo from '../assets/title-burger-queen.svg';
import viewOrders from '../assets/checklist.svg';
import placeOrders from '../assets/listEdit.svg';
import '../App.css';

const PlaceOrders = () => (
  <div className="waiter-choice">
    <span className="strong-subtitle colorLetterBrown">REALIZAR PEDIDO</span>
    <img className="placeOrders" src={placeOrders} alt="" />
    <span className="subtitle colorLetterBrown">INGRESA NOMBRE</span>
    <input className="input-name" placeholder="Nombre del Cliente" type="text" />
    <button type="button" className="button-brown buttonNone">CONTINUAR</button>
  </div>
);

const ViewOrders = () => (
  <div>
    <button type="button" className="waiter-choice buttonNone">
      <span className="strong-subtitle special-subtitle colorLetterBrown">VER PEDIDOS LISTOS</span>
      <img src={viewOrders} alt="" />
    </button>
  </div>
);

const PlaceAndViewOrders = () => (
  <div>
    <header className="headerMain flexRow">
      <div className="start">
        <a href="/home"><img src={back} alt="Volver" /></a>
      </div>
      <div className="center">
        <img src={logo} alt="logo" />
      </div>
    </header>
    <main className="main-PlaceAndOrders flexRow">
      <PlaceOrders />
      <ViewOrders />
    </main>
  </div>
);

export default PlaceAndViewOrders;
