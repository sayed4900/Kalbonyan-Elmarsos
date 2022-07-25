'use strict';

console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9));

const x = new Array(7);
console.log(x);

x.fill(1, 3);
console.log(x);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.fill(23, 4, 6);
console.log(arr);

//Array.from

const y = Array.from({ length: 9 }, () => 1);

console.log(y);

const z = Array.from({ length: 9 }, (cur, i) => i + 1);
console.log(z);
