import 'firebase/firestore';
import Firebase from '../firebase-config';

const db = Firebase.firestore();
const food = db.collection('food');
const getPriceAndNameFood = (callback) => food.where('breakfast', '==', true).get().then((snapshot) => {
  const foodBreakfast = [];
  if (snapshot.empty) {
    console.log('No matching documents.');
  } else {
    snapshot.forEach((doc) => {
      const breakfastObj = {
        price: doc.data().price,
        name: doc.data().name,
      };
      foodBreakfast.push(breakfastObj);
    });
    console.log(foodBreakfast);
    console.log(foodBreakfast[0].name);
    callback(foodBreakfast);
  }
  // console.log(foodBreakfast.breakfastObj.price);
//   console.log(foodBreakfast.find((e) => e > 2));
//   console.log(foodBreakfast.indexOf('café americano'));
//   console.log(foodBreakfast.length);
})
  .catch((err) => {
    console.log('Error getting documents', err);
  });

export default getPriceAndNameFood;
