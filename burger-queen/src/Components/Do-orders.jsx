import React, { useState, useEffect } from 'react';
import useModal from '../hooks/useModal';
import firebase from '../firebase-config';
import Background from './Background';
import Modal from './Modal';
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
  const { isShowing, toggleModal } = useModal();

  const filterSelectType = (str) => {
    setSelectType(str);
  };
  const time = firebase.firestore.Timestamp.fromDate(new Date());
  const initialStateOrder = {
    name: '',
    items: [],
    hour: new Date(),
    status: 'pending',
  };
  const [order, setOrder] = useState(initialStateOrder);
  const updateClient = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };
  const addPropertiesToOrder = (price, name, id) => {
    const item = {
      amount: 1,
      price,
      name,
      id,
      total: 1 * price,
    };
    const findID = order.items.find((element) => element.id === id);
    let arrItems = [];
    if (findID === null) {
      findID.amount += 1;
    } else {
      arrItems = order.items.push(item);
    }

    setOrder((prevState) => ({
      ...prevState,
      arrItems,
    }));
  };

  const totalPriceByProduct = (id, count) => {
    let prueba = order.items.find((obj) => obj.id === id);
    prueba = Object.assign(prueba, { total: prueba.price * count });
    setOrder((prevState) => ({
      ...prevState,
      items: [...order.items],
    }));
  };

  const addOne = (id) => {
    const itemSelected = order.items.find((e) => e.id === id);
    itemSelected.amount += 1;
    setOrder({ ...order, items: itemSelected.amount });
    totalPriceByProduct(id, itemSelected.amount);
  };

  const lessOne = (id) => {
    const itemSelected = order.items.find((e) => e.id === id);
    if (itemSelected.amount > 1) {
      itemSelected.amount -= 1;
    }
    setOrder({ ...order, items: itemSelected.amount });
    totalPriceByProduct(id, itemSelected.amount);
  };

  const deleteItem = (id) => {
    order.items.splice(id, 1);
    setOrder((prevState) => ({ ...prevState, order }));
  };

  const sendFirestore = () => {
    sendOrder(order);
    setOrder({ ...initialStateOrder });
    return toggleModal();
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
  console.log('getpriceandbreakfast', getPriceAndNameBreakfast());

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
            <div className="inputName">
              <input
                className="input-name"
                placeholder="Cliente"
                type="text"
                id="name"
                name="name"
                value={order.name}
                onChange={updateClient}
              />
              <label htmlFor="name" className="clientValue">
                PARA:
                <span>{order.name}</span>
              </label>
            </div>
            <div className="showHour"><Clock /></div>
            <div className="containerOrderList">
              <div className="justlist">
                <div className="containOrderList">
                  {
                  order.items.map((obj) => (
                    <div className="orderList flexRow" key={obj.id}>
                      <button id="counter-add" type="button" onClick={() => addOne(obj.id)} className="buttonNone">
                        <img src={AddIcon} alt="" />
                      </button>
                      <div className="containerQuantityByProducts">
                        <span id="counter-span">{obj.amount}</span>
                      </div>
                      <button
                        id="counter-less"
                        type="button"
                        onClick={() => lessOne(obj.id)}
                        className="buttonNone"
                      >
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
                  {console.log(order)}
                  {console.log('hora', order.hour.toLocaleTimeString())}
                </div>
              </div>
            </div>
            <div className="blockEnd">
              <div className="clientValue">
                <span>
                  TOTAL DE PEDIDO: S/
                  {order.items.reduce((acum, obj) => acum + obj.price * obj.amount, 0)}
                </span>
              </div>
              <div className="flex-around">
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
                <a href="/orders">
                  <button
                    className="buttonNone sendAndNullButton"
                    type="button"
                  >
                    VER PEDIDOS
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isShowing={isShowing}
        hide={toggleModal}
      />
    </div>
  );
};

export default DoOrders;
