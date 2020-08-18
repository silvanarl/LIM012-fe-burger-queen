import React, { useState, useEffect} from 'react';
import Add from '../assets/orderComponentIcons/add-icon.svg';
import Less from '../assets/orderComponentIcons/less-icon.svg';
import Delete from '../assets/orderComponentIcons/delete-icon.svg';

const Order = () => {
  const [count, setCount] = useState(1);
  
  return (
    <div>
      <button type="button">
        <Add />
      </button>
      <span>{count}</span>
      <button type="button">
        <Less />
      </button>
      <span>{item}</span>
      <span>{total}</span>
    </div>
  );
};
