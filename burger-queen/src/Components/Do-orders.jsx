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

  const [selectType, setSelectType] = useState('0');
  const filterSelectType = (str) => {
    setSelectType(str);
  };
  const initialStateClient = {
    name: '',
  };
  const [client, setClient] = useState(initialStateClient);
  const updateClient = (e) => {
    const { name, value } = e.target;
    setClient({ [name]: value });
  };

  const sendFirestore = () => {
    sendClient(client);
    setClient({ ...initialStateClient });
  };
  const [order, setOrder] = useState({
    client,
    items: [],
    total_price: 0,
    hour: new Date().toLocaleTimeString(),
    status: 'pending',
  });
  const [count, setCount] = useState(1);
  const addOne = () => setCount(count + 1);
  const lessOne = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const [amount, setAmount] = useState(0);

  const addPropertiesToOrder = (price, name, id) => {
    const item = {
      amount,
      price,
      name,
      id,
    };
    setOrder((prevState) => ({
      ...prevState,
      items: [item],
    }));
    console.log(order);
  };

  const renderComponentTypeFood = () => {
    switch (selectType) {
      case '1':
        return (
          <MenuView
            menuData={menuData}
            addPropertiesToOrder={addPropertiesToOrder}
          />
        );
      case '2':
        return (
          <DrinksView
            drinksData={drinksData}
            addPropertiesToOrder={addPropertiesToOrder}
          />
        );
      default:
        return (
          <BreackfastView
            breakfastData={breakfastData}
            addPropertiesToOrder={addPropertiesToOrder}
          />
        );
    }
  };

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
            <ButtonBreakfast filterSelectType={filterSelectType} />
            <ButtonMenu filterSelectType={filterSelectType} />
            <ButtonDrinks filterSelectType={filterSelectType} />
          </div>
          <div className="containerAllFood">
            {renderComponentTypeFood()}
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
                {
                order.items.map((obj) => (
                  <div className="orderList flexRow" key={obj.id}>
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
                      <span className="fontSize25 upperText">{obj.name}</span>
                    </div>
                    <div className="spaceInter">
                      <span className="fontSize25 upperText">
                        S/
                        {obj.price * count}
                      </span>
                    </div>
                    <button type="button" className="buttonNone">
                      <img src={DeleteIcon} alt="" />
                    </button>
                  </div>
                ))
              }
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
