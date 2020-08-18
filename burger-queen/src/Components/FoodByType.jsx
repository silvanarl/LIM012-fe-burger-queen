import React from 'react';
import PropTypes from 'prop-types';
import '../css/app.css';
import Icons from './Icons';

const ButtonSelectFood = ({ price, name, id }, index, functionx) => (
  <div key={id} className="buttonSelectFood">
    <button type="button" className="buttonNone buttonByProduct" onClick={() => functionx(price, name, id)}>
      <img src={Icons[index].img} alt={name} />
      <span>
        S/
        {price}
      </span>
      <span className="upperText">{name}</span>
    </button>
  </div>
);

export const BreackfastView = ({ breakfastData, functionx }) => {
  const arrView = breakfastData.map((obj, index) => ButtonSelectFood(obj, index, functionx));
  return (
    <div>
      {arrView}
    </div>
  );
};

export const MenuView = ({ menuData }) => {
  const arrView = menuData.map(ButtonSelectFood);
  return (
    <div>
      {arrView}
    </div>
  );
};

export const DrinksView = ({ drinksData }) => {
  const arrView = drinksData.map(ButtonSelectFood);
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
  functionx: PropTypes.func.isRequired,
};

MenuView.propTypes = {
  menuData: PropTypes.arrayOf.isRequired,
};

DrinksView.propTypes = {
  drinksData: PropTypes.arrayOf.isRequired,
};
