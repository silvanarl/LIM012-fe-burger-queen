import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
import Clock from './Clock';

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
    totalPrice: [],
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
      amount: 1,
      price,
      name,
      id,
      total: 1 * price,
    };
    const arrItems = order.items.push(item);

    setOrder((prevState) => ({
      ...prevState,
      arrItems,
    }));
  };

  // const totalPriceByProduct = (id) => {
  //   // let total;
  //   const prueba = order.items.find((obj) => obj.id === id);
  //   prueba.total = prueba.price * prueba.amount;
  //   console.log('prueba', prueba);
  //   setOrder((prevState) => ({
  //     ...prevState,
  //     items: [...order.items],
  //   }));
  //   console.log(order);
  // };

  const totalPriceByProduct = (id, count) => {
    let prueba = order.items.find((obj) => obj.id === id);
    prueba = Object.assign(prueba, { total: prueba.price * count });
    setOrder((prevState) => ({
      ...prevState,
      items: [...order.items],
    }));
  };

  // const totalPrice = () => {
  //   order.items.forEach((e) => {
  //     order.totalPrice.push(e.total);
  //   });
  //   order.totalPrice.reduce((acc, curr) => acc + curr);
  //   console.log(order.totalPrice);
  // };
  // console.log(totalPrice());

  const [count, setCount] = useState(1);
  const addOne = (id) => {
    setCount(count + 1);
    totalPriceByProduct(id, count + 1);
  };
  const lessOne = (id) => {
    if (count > 1) {
      setCount(count - 1);
      totalPriceByProduct(id, count - 1);
    }
  };

  const deleteItem = (id) => {
    console.log(id);
    const itemsDontDelete = order.items.filter((e) => e.id !== id);
    setOrder((prevState) => ({ ...prevState, item: itemsDontDelete }));
  };

  const sendFirestore = () => {
    sendOrder(order);
    setOrder({ ...initialStateOrder });
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
  MenuView.propTypes = {
    menuData: PropTypes.arrayOf.isRequired,
  };
  BreackfastView.propTypes = {
    breakfastData: PropTypes.arrayOf.isRequired,
  };
  DrinksView.propTypes = {
    drinksData: PropTypes.arrayOf.isRequired,
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
            <div className="showHour"><Clock /></div>
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
                    <button type="button" onClick={() => lessOne(obj.id)} className="buttonNone">
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
                    <button type="button" onClick={() => deleteItem(obj.id)} className="buttonNone">
                      <img src={DeleteIcon} alt="" />
                    </button>
                  </div>
                ))
              }
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
