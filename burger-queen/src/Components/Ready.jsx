import React from 'react';
import PropTypes from 'prop-types';

const ReadyOrder = ({ readyOrder }) => {
  const newHour = readyOrder.map((obj) => console.log('hora ready', obj.hour.toMillis()))
  console.log('parseada', Date.parse(newHour));
  // console.log('con localtime', newHour.toLocaleTimeString());
  return (
    <div>
      {console.log('order ready', readyOrder)}
      {readyOrder.map((obj) => (
        <div key={obj.id} className="order-wrapper">
          <div key={obj.id} className="order-container">
            <div className="order-info">
              <p className="order-info-name">{obj.name.toUpperCase()}</p>
              {/* <p>{obj.hour}</p> */}
              {obj.items.map((objItem, index) => (
                <ul className="order-list" key={index}>
                  <li className="flexRow">
                    <div className="order-list-amount">
                      <span>{objItem.amount}</span>
                    </div>
                    <span className="mg-left-10">{objItem.name}</span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ReadyOrder.propTypes = {
  readyOrder: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReadyOrder;
