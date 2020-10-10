import React from 'react';
import PropTypes from 'prop-types';

const ReadyOrder = ({ readyOrder }) => (
  <div>
    {readyOrder.map((obj) => (
      <div key={obj.id} className="entered-order-wrapper">
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
          </div>
        </div>
      </div>
    ))}
  </div>
);

ReadyOrder.propTypes = {
  readyOrder: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReadyOrder;
