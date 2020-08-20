import React from 'react';
import PropTypes from 'prop-types';
import Icons from './Icons';

const ButtonSelectFood = ({ price, name, id }, index, addPropertiesToOrder) => (
  <div key={id} className="buttonSelectFood">
    <button type="button" className="buttonNone buttonByProduct" onClick={() => addPropertiesToOrder(price, name, id)}>
      <img src={Icons[index].img} alt={name} />
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
  breakfastData: PropTypes.arrayOf.isRequired,
  addPropertiesToOrder: PropTypes.func.isRequired,
};

MenuView.propTypes = {
  menuData: PropTypes.arrayOf.isRequired,
  addPropertiesToOrder: PropTypes.func.isRequired,
};

DrinksView.propTypes = {
  drinksData: PropTypes.arrayOf.isRequired,
  addPropertiesToOrder: PropTypes.func.isRequired,
};
