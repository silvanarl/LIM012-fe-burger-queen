import React, { useState, useEffect } from 'react';
import { getOrders, getOrdersReady } from '../controllers/firestore.controller';
import Background from '../Components/Background';
import EnteredOrder from '../Components/OrderKitchen';
import ReadyOrder from '../Components/Ready';

const Kitchen = () => {
  const [enteredOrder, setEnteredOrder] = useState([]);
  const [readyOrder, setReadyOrder] = useState([]);

  useEffect(() => {
    getOrders().then((arr) => setEnteredOrder(arr));
    getOrdersReady().then((arr) => setReadyOrder(arr));
  }, []);

  return (
    <div>
      <Background />
      <div className="flex-around">
        <div className="title-orders-kitchen">
          <p>PEDIDOS INGRESADOS</p>
        </div>
        <div className="title-orders-kitchen">
          <p>PEDIDOS LISTOS</p>
        </div>
      </div>
      <div className="flex-around">
        <EnteredOrder enteredOrder={enteredOrder} />
        <ReadyOrder readyOrder={readyOrder} />
      </div>
    </div>
  );
};

export default Kitchen;
