import React from 'react';
import PropTypes from 'prop-types';

const ButtonSelectFood = ({ price, name, id }, index, addPropertiesToOrder) => (
  <div key={id} className="buttonSelectFood">
    <button
      type="button"
      className="buttonNone buttonByProduct"
      onClick={() => addPropertiesToOrder(
        price,
        name,
        id,
      )}
    >
      <figure><img src={`${process.env.PUBLIC_URL}/iconsProducts/${name}.svg`} alt={name} /></figure>
      <span>
        S/
        {price}
      </span>
      <span className="upperText">{name}</span>
    </button>
  </div>
);

export const BreackfastView = ({ breakfastData, addPropertiesToOrder }) => {
  const arrView = breakfastData.map((obj, index) => ButtonSelectFood(
    obj,
    index,
    addPropertiesToOrder,
  ));
  return (
    <div>
      {arrView}
    </div>
  );
};

export const MenuView = ({ menuData, addPropertiesToOrder }) => {
  const arrView = menuData.map((obj, index) => ButtonSelectFood(
    obj,
    index,
    addPropertiesToOrder,
  ));
  return (
    <div>
      {arrView}
    </div>
  );
};

export const DrinksView = ({ drinksData, addPropertiesToOrder }) => {
  const arrView = drinksData.map((obj, index) => ButtonSelectFood(
    obj,
    index,
    addPropertiesToOrder,
  ));
  return (
    <div>
      {arrView}
    </div>
  );
};

ButtonSelectFood.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

BreackfastView.propTypes = {
  breakfastData: PropTypes.arrayOf(PropTypes.object).isRequired,
  addPropertiesToOrder: PropTypes.func.isRequired,
};

MenuView.propTypes = {
  menuData: PropTypes.arrayOf(PropTypes.object).isRequired,
  addPropertiesToOrder: PropTypes.func.isRequired,
};

DrinksView.propTypes = {
  drinksData: PropTypes.arrayOf(PropTypes.object).isRequired,
  addPropertiesToOrder: PropTypes.func.isRequired,
};
