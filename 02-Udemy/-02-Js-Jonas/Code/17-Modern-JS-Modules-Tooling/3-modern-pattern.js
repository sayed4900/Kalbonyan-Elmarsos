'use strict';

import add, { cart, totalQuantity } from './shoppingCart.js';

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 22;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${product} : ${quantity} added to cart and cost is ${shippingCost}`
    );
  };
  const orderStock = function (product, quantity) {
    console.log(`${product} : ${quantity} ordered from supplier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('orange', 2);

console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
