'use strict';
console.log('TEST START');

setTimeout(() => {
  console.log('0 second');
}, 0);

Promise.resolve('Resolved Promise 1 ').then(res => {
  console.log(res);
});
Promise.resolve('Resolved Promise 2 ').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test ENd');
