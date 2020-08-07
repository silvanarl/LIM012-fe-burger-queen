import React from 'react';
import '../css/app.css';
import 'firebase/firestore';
import Firebase from '../firebase-config';
import americanCoffee from '../assets/breakfast-icons/cafe-americano.svg';
import milkCoffee from '../assets/breakfast-icons/cafe-con-leche.svg';
import natJuice from '../assets/breakfast-icons/jugo-natural.svg';
import sandwich from '../assets/breakfast-icons/sandwich-de-queso.svg';

const db = Firebase.firestore();
const food = db.collection('food');
const foodMenu = food.where('menu', '==', true).get()
  .then((snapshot) => {
    if (snapshot.empty) {
      console.log('No matching documents.');
    } else {
      snapshot.forEach((doc) => {
        console.log(doc.data().price);
        console.log(doc.data().name);
      });
    }
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

const ButtonSelectFood = ({icon, price, name}) => (
  <div className="contButtonSelectFood">
    <img src={icon} alt={name} />
    <span>{price}</span>
    <span>{name}</span>
  </div>
);

export const ButtonAmericanCoffee = () => (
  <div>
    <button type="button" className="buttonSelectFood">
      <ButtonSelectFood icon={americanCoffee} price={5} name="burguer" />
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
