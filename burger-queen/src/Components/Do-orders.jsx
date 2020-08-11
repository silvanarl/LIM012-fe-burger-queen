import React, { useState, useEffect } from 'react';
import Background from './Background';
import Client from './Client';
import { ButtonMenu, ButtonBreakfast, ButtonDrinks } from './Button-foodType';
import '../css/app.css';
import {
  getPriceAndNameBreakfast,
  getPriceAndNameMenu,
  getPriceAndNameDrinks,
} from '../controllers/firestore.controller';
import {
  BreackfastView,
  MenuView,
  DrinksView,
} from './FoodByType';

const DoOrders = () => {
  const [breakfastData, setBreakfatsData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [drinksData, setDrinksData] = useState([]);
  const [client, setClient] = useState('');

  useEffect(() => {
    getPriceAndNameBreakfast().then((arr) => setBreakfatsData(arr));
    getPriceAndNameMenu().then((arr) => setMenuData(arr));
    getPriceAndNameDrinks().then((arr) => setDrinksData(arr));
  }, []);
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
            <div>
              <BreackfastView breakfastData={breakfastData} />
            </div>
            <div>
              <MenuView menuData={menuData} />
            </div>
            <div>
              <DrinksView drinksData={drinksData} />
            </div>
          </div>
        </div>
        <div className="flexRow">
          <div className="folder">
            <Client client={client} />
          </div>
          <div className="folderTwo" />
        </div>
      </div>
    </div>
  );
};

export default DoOrders;
