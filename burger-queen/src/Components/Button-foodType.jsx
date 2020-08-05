import React from 'react';
import '../css/app.css';
import Menu from '../assets/menu-white.svg';
import Drinks from '../assets/drinks-white.svg';
import Breakfast from '../assets/breakfast-brown.svg';

const ButtonFoodType = ({ food, icon }) => (
  <div className="flexColumn containerFood">
    <span className="typeFood">{ food }</span>
    <img src={icon} alt={food} />
  </div>
);

export const ButtonBreakfast = () => (
  <div className="flexColumn">
    <button type="button" className="containerOptionFood">
      <ButtonFoodType food="Desayuno" icon={Breakfast} />
    </button>
  </div>
);

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
