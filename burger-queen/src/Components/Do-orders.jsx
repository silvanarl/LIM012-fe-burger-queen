import React, { useState } from 'react';
import Background from './Background';
import { ButtonMenu, ButtonBreakfast, ButtonDrinks } from './Button-foodType';
import '../css/app.css';
import getPriceAndNameFood from '../controllers/firestore.controller';
import foodMenu from '../controllers/firestore.controller';
import {
  // ButtonCoffeeAndMilk,
  // ButtonAmericanCoffee,
  // ButtonHamAndCheeseSandwich,
  // ButtonNaturalJuice,
  VistaDePrueba,
} from './FoodByType';

const DoOrders = () => {
  const [arrData, setarrData] = useState([]);
  getPriceAndNameFood().then((arr) => setarrData(arr));
  return (
    <div>
      <Background />
      <div className="flexRow">
        <div className="flexColumn">
          <div className="flexRow">
            <ButtonBreakfast />
            <ButtonMenu />
            <ButtonDrinks />
          </div>
          <div className="containerAllFood">
            <VistaDePrueba arrData={arrData} />
          </div>
        </div>
        <div className="flexRow">
          <div className="folder" />
          <div className="folderTwo" />
        </div>
      </div>
    </div>
  );
};
export default DoOrders;
