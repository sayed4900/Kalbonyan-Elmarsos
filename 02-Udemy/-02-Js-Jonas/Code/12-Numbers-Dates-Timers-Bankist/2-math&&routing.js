'use strict';

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3)); // 2^3 = 8

console.log(Math.max(5, 0, 11, 23, 22, 55, 7, 8));
console.log(Math.max(5, 0, 11, 23, '22', '55', 7, 8));
console.log(Math.max(5, 0, 11, 23, 22, '55px', 7, 8));
console.log(Math.min(50, 11, 23, 22, 55, 7, 8));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

//Rounding intgers

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.8));

console.log(Math.floor(23.8));
console.log(Math.floor(23.2));
console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//Rounding decimals

// Strings
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.7).toFixed(3)); // String

console.log(+(2.3578).toFixed(2)); // NUMBER
