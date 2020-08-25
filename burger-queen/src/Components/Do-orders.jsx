import React, { useState, useEffect } from 'react';
import Background from './Background';
import AddIcon from '../assets/orderComponentIcons/add-icon.svg';
import LessIcon from '../assets/orderComponentIcons/less-icon.svg';
import DeleteIcon from '../assets/orderComponentIcons/delete-icon.svg';
import { ButtonMenu, ButtonBreakfast, ButtonDrinks } from './Button-foodType';
import {
  getPriceAndNameBreakfast,
  getPriceAndNameMenu,
  getPriceAndNameDrinks,
  sendOrder,
} from '../controllers/firestore.controller';
import {
  BreackfastView,
  MenuView,
  DrinksView,
} from './FoodByType';
import Clock from './clock';

const DoOrders = () => {
  const [breakfastData, setBreakfatsData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [drinksData, setDrinksData] = useState([]);

  const [selectType, setSelectType] = useState('0');
  const filterSelectType = (str) => {
    setSelectType(str);
  };
  const initialStateOrder = {
    name: '',
    items: [],
    total_price: 0,
    hour: new Date().toLocaleTimeString(),
    status: 'pending',
  };
  const [order, setOrder] = useState(initialStateOrder);
  const updateClient = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };
  const addPropertiesToOrder = (price, name, id, amount, total) => {
    const item = {
      amount,
      price,
      name,
      id,
      total:0,
    };
    setOrder((prevState) => ({
      ...prevState,
      items: [item],
    }));
  };
  const sendFirestore = () => {
    sendOrder(order);
    setOrder({ ...initialStateOrder });
  };
  const [count, setCount] = useState(1);
  const addOne = (id) => {
    setCount(count + 1)
    totalPriceByProduct(id)
  };
  const lessOne = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  
  const totalPriceByProduct = (id) => {
    // let total;
    const prueba = order.items.filter((obj) => obj.id === id);
      console.log(prueba);
      prueba[0].total = prueba[0].price * prueba[0].amount;
    setOrder((prevState) => ({
      ...prevState,
      items:[...order.items],
    }));
  };

  // Usamos este hook para actualizar la cantidad de producto solicitada al valor de count y
  // agregarla al obj order. Jijiji
  useEffect(() => {
    order.items.map(obj => obj.amount = count);
  }, [count]);

  const [amount, setAmount] = useState(0);
  // useEffect(() => {
  // }, []);

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
              value={order.name}
              onChange={updateClient}
            />
            <div className="showHour">{Clock}</div>
            <p className="clientValue">
              PARA:
              <span>{order.name}</span>
            </p>
            
            <div className="containerOrderList">
              <div className="containOrderList">
                {
                order.items.map((obj) => (
                  <div className="orderList flexRow" key={obj.id}>
                    <button type="button" onClick={() => addOne(obj.id)} className="buttonNone">
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
                        {obj.total}
                      </span>
                    </div>
                    <button type="button" className="buttonNone">
                      <img src={DeleteIcon} alt="" />
                    </button>
                  </div>
                ))
              }
              {console.log(order)}
              {console.log(order.items)}
              </div>
              <div className="">
                <span>
                  TOTAL DE PEDIDO: S/
                  {order.total_price}
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