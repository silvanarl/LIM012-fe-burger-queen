import MockFirestore from 'mock-cloud-firestore';

const fixtureData = {
  name: 'Simone',
  items: [
    {
      name: 'jugo natural',
      price: 7,
      id: '12345678',
      amount: 1,
      total: 7,
    },
  ],
  status: 'pending',
};
console.log('el mock');

// causa onSnapshot
export default new MockFirestore(fixtureData, {
  isNaiveSnapshotListenerEnabled: true,
});
