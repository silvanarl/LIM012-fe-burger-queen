import React, { useState, useEffect } from 'react';
import { getOrders, getOrdersReady } from '../controllers/firestore.controller';
import Background from '../Components/Background';
import EnteredOrder from '../Components/OrderKitchen';
import ReadyOrder from '../Components/Ready';
import Exit from '../Components/Exit';

const Kitchen = () => {
  const [enteredOrder, setEnteredOrder] = useState([]);
  const [readyOrder, setReadyOrder] = useState([]);

  useEffect(() => {
    getOrders(setEnteredOrder);
    getOrdersReady(setReadyOrder);
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
        <div className="containter-orders">
          <EnteredOrder enteredOrder={enteredOrder} />
        </div>
        <div className="containter-orders">
          <ReadyOrder readyOrder={readyOrder} />
        </div>
      </div>
      <Exit />
    </div>
  );
};

export default Kitchen;
