import React from 'react';
// import PropTypes from 'prop-types';
// import send from '../assets/change-status-order.svg';
import { updateStatus } from '../controllers/firestore.controller';

const ReadyOrder = ({ readyOrder }) => {
  {console.log(readyOrder)}
//   const handleClick = (id) => {
//     enteredOrder.find((obj) => obj.id === id);
//     const newStatus = 'delivered';
//     updateStatus(id, newStatus);
//   };
//   EnteredOrder.propTypes = {
//     enteredOrder: PropTypes.arrayOf.isRequired,
//   };

  return (
    <div>
      {readyOrder.map((obj) => (
        <div className="entered-order-wrapper">
          <div key={obj.id} className="entered-order-container">
            <div className="entered-order-info">
              <p>{obj.name}</p>
              <p>{obj.hour.toLocaleString()}</p>
              {obj.items.map((objItem, index) => (
                <ul className="entered-order-list" key={index}>
                  <li>
                    <div className="entered-order-list-amount">
                      <span>{objItem.amount}</span>
                    </div>
                    <span>{objItem.name}</span>
                  </li>
                </ul>
              ))}
              {/* <button type="button" onClick={() => handleClick(obj.id)}>
                <img src={send} alt="Envía orden a Listo" />
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadyOrder;
