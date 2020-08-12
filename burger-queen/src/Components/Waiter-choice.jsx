import React, { useState } from 'react';
import viewOrders from '../assets/checklist.svg';
import placeOrders from '../assets/listEdit.svg';
import BackgroundBack from './Background-back';
import '../css/app.css';

const PlaceOrders = () => {
  const [client, setClient] = useState('');
  const updateClient = (e) => setClient(e.target.value);
  const buttonContinue = () => {
    if (client !== '') {
      console.log('hay algo escrito');
    }
  };

  return (
    <div className="waiter-choice">
      <span className="strong-subtitle colorLetterBrown">REALIZAR PEDIDO</span>
      <img className="placeOrders" src={placeOrders} alt="" />
      <span className="subtitle colorLetterBrown">INGRESA NOMBRE</span>
      <input
        className="input-name"
        placeholder="Nombre del Cliente"
        type="text"
        value={client}
        onChange={updateClient}
      />
      <a href="/orders-menu">
        <button
          type="button"
          className="button-brown buttonNone"
          onClick={buttonContinue}
        >
          CONTINUAR
        </button>
      </a>
    </div>
  );
};

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
    <BackgroundBack />
    <main className="main-PlaceAndOrders flexRow">
      <PlaceOrders />
      <ViewOrders />
    </main>
  </div>
);

export default PlaceAndViewOrders;
