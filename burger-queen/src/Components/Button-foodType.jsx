import React from 'react';
import '../css/app.css';
import Menu from '../assets/white-icons/menu-white.svg';
import Drinks from '../assets/white-icons/drinks-white.svg';
// import Breakfast from '../assets/white-icons/breakfast-white.svg';

const ButtonFoodType = ({ food, icon }) => (
  <div className="flexColumn containerFood">
    <span className="typeFood">{ food }</span>
    <img src={icon} alt={food} />
  </div>
);

// Cuando haga click asiganarle la nueva clase
// const clickButtonFood = () => ();

export const ButtonBreakfast = () => (
  <div className="flexColumn">
    <button type="button" className="containerOptionFood">
      <ButtonFoodType food="Desayuno" icon="./src/assets/white-icons/breakfast-white.svg" />
    </button>
  </div>
);

export const ButtonMenu = () => (
  <div className="flexColumn">
    <button type="button" className="containerOptionFood margin-size40">
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
