import firebasemock from 'firebase-mock';

const mockfirestore = new firebasemock.MockFirestore();
global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockfirestore,
);
