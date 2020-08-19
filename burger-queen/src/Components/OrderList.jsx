import React, { useState, useEffect} from 'react';
import Add from '../assets/orderComponentIcons/add-icon.svg';
import Less from '../assets/orderComponentIcons/less-icon.svg';
import Delete from '../assets/orderComponentIcons/delete-icon.svg';

const Order = () => {
  const [count, setCount] = useState(0);
  const addOne = () => setCount(count + 1);
  const lessOne = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [order, setOrder] = useState({
    client,
    items: [],
    total_price: 0,
  });
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
  };

  return (
    <div className="orderList flexRow" key={obj.id}>
      <button type="button" onClick={addOne} className="buttonNone">
        <img src={Add} alt="" />
      </button>
      <div className="containerQuantityByProducts">
        <span>{count}</span>
      </div>
      <button type="button" onClick={lessOne} className="buttonNone">
        <img src={Less} alt="" />
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
        <img src={Delete} alt="" />
      </button>
    </div>
  );
};
