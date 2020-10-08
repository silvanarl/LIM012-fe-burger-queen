import MockFirebase from 'mock-cloud-firestore';
import { sendOrder, getOrders } from '../src/controllers/firestore.controller';

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

// causa onSnapshot
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true }); 

describe('enviar ordenes', () => {
  it('debería poder enviar una orden con estos datos', (done) => sendOrder(fictureData)
    .then(() => {
      const callback = (order) => {
        const name = order.find((ele) => ele.name === 'Simone');
        expect(name).toBe('Simone'); // name = name.name
        done();
      };
      getOrders(callback);
    }));
});

describe('Obtener ordenes', () => {
  it('deberia traer las ordenes pendientes', () => {

  });
});
