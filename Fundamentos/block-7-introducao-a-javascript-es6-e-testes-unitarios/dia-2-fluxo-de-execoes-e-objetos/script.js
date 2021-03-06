const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telfone: ${order.phoneNumber},R. ${order.address.street},Nº: ${order.address.number}, AP: ${order.address.apartment}`);
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telfone: ${order.phoneNumber},R. ${order.address.street},Nº: ${order.address.number}, AP: ${order.address.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = "Gabriel Freitas";
  order.payment.total = 50;
  let array = Object.keys(order.order.pizza);
  //console.log(array);
  console.log(`Olá ${order.name}, o total do seu pedido de ${array[0]},${array[1]},${order.order.drinks.coke.type} é de R$ ${order.payment.total}`);
}

orderModifier(order);

//console.log(Object.entries(order));
//const array = Object.entries(order);
//console.log((array[3]));