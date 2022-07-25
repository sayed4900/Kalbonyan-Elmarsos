'use strict';

//Create a date

/*
const now = new Date();
console.log(now);

console.log(new Date('2022-06-29T18:15:05.513Z'));

console.log(new Date(2037, 10, 19, 15, 15, 5));
console.log(new Date(2037, 10, 19));
*/

//Working with dates

const future = new Date(2024, 7, 19, 5, 30, 0);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(1724038200000));

console.log(Date.now());
console.log(new Date(1656576498810));

future.setFullYear(2222);
console.log(future);
