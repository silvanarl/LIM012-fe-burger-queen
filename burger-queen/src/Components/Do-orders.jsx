import React from 'react';
import Background from './Background';
import { ButtonMenu, ButtonBreakfast, ButtonDrinks } from './Button-foodType';
import '../css/app.css';
import foodMenu from '../controllers/firestore.controller';

const DoOrders = () => (
  <div>
    <Background />
    <div className="flexRow">
      <div className="flexColumn">
        <div className="flexRow">
          <ButtonBreakfast />
          <ButtonMenu />
          <ButtonDrinks />
        </div>
        <div className="containerAllFood" />
      </div>
      <div className="flexRow">
        <div className="folder" />
        <div className="folderTwo" />
      </div>
    </div>
  </div>
);
export default DoOrders;
