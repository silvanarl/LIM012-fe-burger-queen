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
  sendClient,
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
  const initialStateClient = {
    name: '',
  };
  const [client, setClient] = useState(initialStateClient);
  const updateClient = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setClient({ [name]: value });
  };

  const sendFirestore = (e) => {
    sendClient(client);
    setClient({ ...initialStateClient });
  };
  const [order, setOrder] = useState({
    items: [{
      amount: 0,
      id_food: '',
    }],
    total_price: 0,
  });
  const [count, setCount] = useState(0);
  const addOne = () => setCount(count + 1);
  const lessOne = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const [amount, setAmount] = useState(0); // precio por producto
  // const [products, setProducts] = useState();

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
              <BreackfastView breakfastData={breakfastData} /> {/* usar renderizado condicional */}
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
              name="name"
              value={client.name}
              onChange={updateClient}
            />
            <p className="clientValue">
              PARA:
              <span>{client.name}</span>
            </p>
            <div className="containerOrderList">
              <div className="containOrderList">
                <div className="orderList flexRow">
                  <button type="button" onClick={addOne} className="buttonNone">
                    <img src={AddIcon} alt="" />
                  </button>
                  <div className="containerQuantityByProducts">
                    <span>{count}</span>
                  </div>
                  <button type="button" onClick={lessOne} className="buttonNone">
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
              <div className="">
                <span>
                  TOTAL DE PEDIDO: S/
                  {amount}
                </span>
              </div>
              <div className="">
                <button
                  className="buttonNone sendAndNullButton"
                  type="button"
                  onClick={sendFirestore}
                >
                  ENVIAR
                </button>
                <button
                  className="buttonNone sendAndNullButton"
                  type="button"
                >
                  ANULAR
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
