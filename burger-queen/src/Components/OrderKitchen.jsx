import React from 'react';
import PropTypes from 'prop-types';
import send from '../assets/change-status-order.svg';
import { updateStatus } from '../controllers/firestore.controller';

const EnteredOrder = ({ enteredOrder }) => {
  const handleClick = (id, status) => {
    enteredOrder.find((obj) => obj.id === id);
    let newStatus;
    if (status === 'pending') {
      newStatus = 'ready';
      updateStatus(id, newStatus);
    } else if (status === 'ready') {
      newStatus = 'delivered';
      updateStatus(id, newStatus);
    }
  };
  EnteredOrder.propTypes = {
    enteredOrder: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return (
    <div>
      {/* {console.log(enteredOrder)} */}
      {enteredOrder.map((obj) => (
        <div key={obj.id} className="order-wrapper">
          <div key={obj.id} className="order-container">
            <div className="order-info">
              <p className="order-info-name">{obj.name.toUpperCase()}</p>
              {/* <p>{obj.hour}</p> */}
              {obj.items.map((objItem, index) => (
                <div key={index} className="flexRow">
                  <ul className="order-list">
                    <li className="flexRow">
                      <div className="order-list-amount">
                        <span>{objItem.amount}</span>
                      </div>
                      <span className="mg-left-10">{objItem.name}</span>
                    </li>
                  </ul>
                </div>
              ))}
              <button className="order-button-status" type="button" onClick={() => handleClick(obj.id, obj.status)}>
                <img src={send} alt="Envía orden a Listo" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnteredOrder;
