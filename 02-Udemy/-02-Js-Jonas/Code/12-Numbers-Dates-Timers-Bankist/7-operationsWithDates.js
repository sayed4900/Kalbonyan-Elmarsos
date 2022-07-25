'use strict';

const future = new Date(2024, 6, 6, 10, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs((date1 - date2) / (1000 * 60 * 60 * 24));

const day1 = calcDaysPassed(new Date(2037, 4, 1), new Date(2037, 6, 30));

console.log(day1);
