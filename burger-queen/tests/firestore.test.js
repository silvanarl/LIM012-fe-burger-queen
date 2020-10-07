import MockFirebase from '../__mocks__/fnMock';
import { sendOrder } from '../src/controllers/firestore.controller';

global.firebase = MockFirebase;

describe('enviar ordenes', () => {
  it('debería poder enviar una orden con estos datos', () => {
    return sendOrder({
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
    }).then((data) => {
      expect(data).toBe({
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
      });
    });
  });
});
