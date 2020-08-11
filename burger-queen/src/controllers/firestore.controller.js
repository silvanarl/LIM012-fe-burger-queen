import 'firebase/firestore';
import Firebase from '../firebase-config';

const db = Firebase.firestore();
const food = db.collection('food');
export const getPriceAndNameBreakfast = () => food.where('breakfast', '==', true).get().then((snapshot) => {
  const foodBreakfast = [];
  snapshot.forEach((doc) => {
    const breakfastObj = {
      price: doc.data().price,
      name: doc.data().name,
    };
    foodBreakfast.push(breakfastObj);
  });
  return foodBreakfast;
})
  .catch((err) => {
    console.log('Error getting documents', err);
  });

export const getPriceAndNameMenu = () => food.where('menu', '==', true).get().then((snapshot) => {
  const foodMenu = [];
  snapshot.forEach((doc) => {
    const menuObj = {
      price: doc.data().price,
      name: doc.data().name,
    };
    foodMenu.push(menuObj);
  });
  return foodMenu;
});

export const getPriceAndNameDrinks = () => food.where('drinks', '==', true).get().then((snapshot) => {
  const foodDrinks = [];
  snapshot.forEach((doc) => {
    const drinksObj = {
      price: doc.data().price,
      name: doc.data().name,
    };
    foodDrinks.push(drinksObj);
  });
  return foodDrinks;
});
