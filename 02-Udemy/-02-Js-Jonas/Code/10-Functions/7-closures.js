'use strict';
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
console.dir(booker);
*/

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 500;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
//
h();
f();
console.dir(f);

//EX:2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log('Timer after 2 seconds!');
// }, 2000);
const perGroup = 500; // perGroup in closure has mor priority the perGroup in Global scope
boardPassengers(180, 3);
