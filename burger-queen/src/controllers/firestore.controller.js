import 'firebase/firestore';
import Firebase from '../firebase-config';

const db = Firebase.firestore();
const food = db.collection('food');
const getPriceAndNameFood = () => food.where('breakfast', '==', true).get().then((snapshot) => {
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

export default getPriceAndNameFood;
