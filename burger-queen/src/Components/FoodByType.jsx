import React from 'react';
import '../css/app.css';
import americanCoffee from '../assets/breakfast-icons/cafe-americano.svg';
import milkCoffee from '../assets/breakfast-icons/cafe-con-leche.svg';
import natJuice from '../assets/breakfast-icons/jugo-natural.svg';
import sandwich from '../assets/breakfast-icons/sandwich-de-queso.svg';
import getPriceAndNameFood from '../controllers/firestore.controller';

const ButtonSelectFood = ({ icon, price, name }) => (
  <div className="contButtonSelectFood">
    <img src={icon} alt={name} />
    <span>{price}</span>
    <span>{name}</span>
  </div>
);

getPriceAndNameFood((data) => console.log(data[0].price));

export const ButtonAmericanCoffee = () => (
  <div>
    <button type="button" className="buttonSelectFood">
      <ButtonSelectFood icon={americanCoffee} price={2} name="juana" />
    </button>
  </div>
);

export const ButtonCoffeeAndMilk = () => (
  <div>
    <button type="button" className="buttonSelectFood">
      <ButtonSelectFood icon={milkCoffee} price={5} name="burguer" />
    </button>
  </div>
);

export const ButtonHamAndCheeseSandwich = () => (
  <div>
    <button type="button" className="buttonSelectFood">
      <ButtonSelectFood icon={sandwich} price={5} name="burguer" />
    </button>
  </div>
);

export const ButtonNaturalJuice = () => (
  <div>
    <button type="button" className="buttonSelectFood">
      <ButtonSelectFood icon={natJuice} price={5} name="burguer" />
    </button>
  </div>
);

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
