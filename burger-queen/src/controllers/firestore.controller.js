// // import firestore from 'firebase/firestore';
// // import firebase from 'firebase';

// // console.log(firebase);
// // Create a reference to the cities collection
// const db = firebase.firestore();
// const food = firebase.firestore().collection('food');
// console.log(db);

// // Create a query against the collection
// const foodMenu = food.where('menu', '==', true).get()
//   .then((snapshot) => {
//     if (snapshot.empty) {
//       console.log('No matching documents.');
//     } else {
//       snapshot.forEach((doc) => {
//         console.log(doc.data);
//       });
//     }
//   })
//   .catch(err => {
//     console.log('Error getting documents', err);
//   });

// export default foodMenu;
