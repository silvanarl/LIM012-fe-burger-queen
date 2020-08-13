import React, { useState, useEffect } from 'react';
import Background from './Background';
import AddIcon from '../assets/orderComponentIcons/add-icon.svg';
import LessIcon from '../assets/orderComponentIcons/less-icon.svg';
import DeleteIcon from '../assets/orderComponentIcons/delete-icon.svg';
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
  const updateClient = (e) => setClient(e.target.value);
  const [order, setOrder] = useState({});

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
          <div className="folder" />
          <div className="folderTwo" />
          <div className="orderInfo">
            <input
              className="input-name"
              placeholder="Cliente"
              type="text"
              value={client}
              onChange={updateClient}
            />
            <p className="clientValue">
              PARA:
              <span>{client}</span>
            </p>
            <div className="containerOrderList">
              <div className="orderList flexRow">
                <button type="button" className="buttonNone">
                  <img src={AddIcon} alt="" />
                </button>
                <div className="containerQuantityByProducts">
                  <span>{1}</span>
                </div>
                <button type="button" className="buttonNone">
                  <img src={LessIcon} alt="" />
                </button>
                <div className="spaceInter">
                  <span className="fontSize25 upperText">hamburquesa simple</span>
                </div>
                <div className="spaceInter">
                  <span className="fontSize25 upperText">
                    S/
                    {15}
                  </span>
                </div>
                <button type="button" className="buttonNone">
                  <img src={DeleteIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoOrders;
