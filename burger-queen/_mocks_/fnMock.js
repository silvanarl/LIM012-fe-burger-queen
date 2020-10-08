// import firebasemock from 'firebase-mock';
// import { resolve } from 'path';

// const mockfirestore = new firebasemock.MockFirestore();
// global.firebase = firebasemock.MockFirebaseSdk(
//   () => null,
//   () => mockfirestore,
// );

// const firestore = () => {
//   return {
//     collection: (nameCollection) => {
//       return {
//         set: (obj) => {
//           return new Promise((resolve) => {
//             resolve('se agregó la orden');
//           });
//         }
//       }
//     }
//   }
// };

// const firebase = {
//   firestore: firestore,
// };

// export default jest.fn(() => {
//   return firebase;
// });
