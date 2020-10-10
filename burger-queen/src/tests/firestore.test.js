import { sendOrder, getOrders } from '../controllers/firestore.controller';

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

describe('enviar ordenes', () => {
  it('debería poder enviar una orden con estos datos', (done) => sendOrder(fixtureData)
    .then(() => {
      const callback = (order) => {
        const result = order.find((ele) => ele.name === 'Simone');
        expect(result.name).toBe('Simone');
        done();
      };
      getOrders(callback);
    }));
});

describe('Obtener ordenes', () => {
  it('deberia traer las ordenes pendientes', () => {

  });
});
