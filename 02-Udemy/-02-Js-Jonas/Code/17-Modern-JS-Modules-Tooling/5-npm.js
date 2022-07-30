console.log('Importing module');

import add, { cart } from './shoppingCart.js';
// import add, { cart, totalQuantity } from './shoppingCart.js';

// import { cloneDeep } from './node_modules/lodash-es/cloneDeep.js';
import { cloneDeep } from 'lodash-es';
add('pizza', 2);
add('bread', 5);
add('apples', 4);
// console.log(cart);
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const sayed = new Person('Sayed');

console.log('sayed' ?? null);

console.log(
  cart.filter(el => {
    el.quantity >= 2;
  })
);

Promise.resolve('test').then(x => console.log(x));

import 'core-js/stable';
