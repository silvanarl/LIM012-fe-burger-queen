import Firebase from '../firebase-config';

const db = Firebase.firestore();
const food = db.collection('food');
export const getPriceAndNameBreakfast = () => food.where('breakfast', '==', true).get().then((snapshot) => {
  const foodBreakfast = [];
  snapshot.forEach((doc) => {
    const breakfastObj = {
      price: doc.data().price,
      name: doc.data().name,
      id: doc.id,
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
      id: doc.id,
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
      id: doc.id,
    };
    foodDrinks.push(drinksObj);
  });
  return foodDrinks;
});

export const sendOrder = (obj) => db
  .collection('orders').doc().set(obj)
  .then(() => {
    console.log('se envio la orden con éxito');
  })
  .catch((error) => {
    console.log('Ocurrió un error al enviar la order', error);
  });

export const getOrdersReady = (callback) => db.collection('orders')
  .where('status', '==', 'ready')
  .onSnapshot((querySnapshot) => {
    const ordersReady = [];
    querySnapshot.forEach((doc) => {
      const objReady = {
        hour: doc.data().hour,
        items: doc.data().items,
        name: doc.data().name,
        status: doc.data().status,
        id: doc.id,
      };
      ordersReady.push(objReady);
    });
    callback(ordersReady);
  });

export const getOrdersDelivered = (callback) => db.collection('orders')
  .where('status', '==', 'delivered')
  .onSnapshot((querySnapshot) => {
    const ordersDelivered = [];
    querySnapshot.forEach((doc) => {
      const objDelivered = {
        hour: doc.data().hour,
        items: doc.data().items,
        name: doc.data().name,
        status: doc.data().status,
        id: doc.id,
      };
      ordersDelivered.push(objDelivered);
    });
    callback(ordersDelivered);
  });

export const getOrders = (callback) => db.collection('orders')
  .where('status', '==', 'pending')
  .onSnapshot((snapshot) => {
    const arrOrders = [];
    snapshot.forEach((doc) => {
      const objOrder = {
        hour: doc.data().hour,
        items: doc.data().items,
        name: doc.data().name,
        status: doc.data().status,
        id: doc.id,
      };
      arrOrders.push(objOrder);
    });
    callback(arrOrders);
  });

export const updateStatus = (id, newStatus) => {
  db.collection('orders').doc(id).update({
    status: newStatus,
  });
};
