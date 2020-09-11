import React from 'react';

const EnteredOrder = ({ enteredOrder }) => {
  const fn = () => {

  };

  return (
    <div>
      <div className="" />
      {enteredOrder.map((obj) => (
        <div className="entered-order-container">
          <div key={obj.id} className="entered-order-info">
            <p>{obj.name}</p>
            {obj.items.map((objItem) => (
              <ul>
                <li>
                  <span>{objItem.amount}</span>
                  <span>{objItem.name}</span>
                </li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnteredOrder;
