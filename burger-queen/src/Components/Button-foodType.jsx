import React from 'react';
import '../css/app.css';
import Menu from '../assets/white-icons/menu-white.svg';
import Drinks from '../assets/white-icons/drinks-white.svg';
import Breakfast from '../assets/white-icons/breakfast-white.svg';
import menuBrown from '../assets/brown-icons/menu-brown.svg';
import breakfastBrown from '../assets/brown-icons/breakfast-brown.svg';
import drinksBrown from '../assets/brown-icons/drinks-brown.svg';

const ButtonFoodType = ({ food, icon }) => (
  <div className="flexColumn containerFood">
    <span className="typeFood">{ food }</span>
    <img src={icon} alt={food} />
  </div>
);

export const ButtonBreakfast = () => {
  const handleClick = (event) => {
    const buttonElement = event.target;
    buttonElement.classList.toggle('toggleClass');
  };
  return (
    <div className="flexColumn">
      <button type="button" onClick={handleClick} className="containerOptionFood">
        <ButtonFoodType food="Desayuno" icon={Breakfast} />
      </button>
    </div>
  );
};

export const ButtonMenu = () => (
  <div className="flexColumn">
    <button type="button" className="containerOptionFood">
      <ButtonFoodType food="Menu" icon={Menu} />
    </button>
  </div>
);

export const ButtonDrinks = () => (
  <div>
    <button type="button" className="containerOptionFood">
      <ButtonFoodType food="Bebidas" icon={Drinks} />
    </button>
  </div>
);
