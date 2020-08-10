import React from 'react';
import '../css/app.css';

const ButtonSelectFood = ({ price, name }) => (
  <li className="contButtonSelectFood">
    <img src={`./assets/breakfast-icons/${name}.svg`} alt={name} />
    <span>{price}</span>
    <span>{name}</span>
  </li>
);

export const VistaDePrueba = ({ arrData }) => {
  const arrView = arrData.map(ButtonSelectFood);
  return (
    <ul>
      {arrView}
    </ul>
  );
};

// export const ButtonAmericanCoffee = () => (
//   <div>
//     <button type="button" className="buttonSelectFood">
//       <ButtonSelectFood icon={americanCoffee} price={5} name="juana" />
//     </button>
//   </div>
// );

// export const ButtonCoffeeAndMilk = () => (
//   <div>
//     <button type="button" className="buttonSelectFood">
//       <ButtonSelectFood icon={milkCoffee} price={5} name="burguer" />
//     </button>
//   </div>
// );

// export const ButtonHamAndCheeseSandwich = () => (
//   <div>
//     <button type="button" className="buttonSelectFood">
//       <ButtonSelectFood icon={sandwich} price={5} name="burguer" />
//     </button>
//   </div>
// );

// export const ButtonNaturalJuice = () => (
//   <div>
//     <button type="button" className="buttonSelectFood">
//       <ButtonSelectFood icon={natJuice} price={5} name="burguer" />
//     </button>
//   </div>
// );

// export const ButtonBurgerSimple = () => (
//   <div>
//     <button type="button" className="buttonSelectFood">
//       <ButtonSelectFood icon={simpleBurger} price={5} name="burguer" />
//     </button>
//   </div>
// );
// export const ButtonBurgerDouble = () => (
//   <div>
//     <button type="button">
//       <ButtonSelectFood icon={simpleBurger} price={10} name="cafe" />
//     </button>
//   </div>
// );
