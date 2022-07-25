'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flighNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flighNum}`
    );
    this.bookings.push({ fligh: `${this.iataCode}${flighNum}`, name });
  },
};

lufthansa.book(222, 'Sayed Abdo');
lufthansa.book(521, 'Ahmed Abdo');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

/*
book(flighNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flighNum}`
    );
    this.bookings.push({ fligh: `${this.iataCode}${flighNum}`, name });
  }
  this⬆️ a bad practice 
  the right way ⬇️⬇️
*/

const book = lufthansa.book;

// book(555, 'Jimmy');
// Error happen because inside  book function  there is  (this) keyword which is on runtime become undefined

//Let's solve the problem!
//Call Method
book.call(eurowings, 555, 'Jimmy'); // Now (this) is refer to eurowings
console.log(eurowings);

book.call(lufthansa, '111', 'Samy');
console.log(lufthansa);

const swiss = {
  name: 'Swiss air plane',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 444, 'Ramy Ahmed');
console.log(swiss);

//Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
///////////////////////////////

//bind method

// book.call(eurowings, 555, 'Jimmy');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Mohamed Abdo');

const bookEW23 = book.bind(eurowings, 23); //Only pass the passenger name
bookEW23('SAYED'); //
bookEW23('Eslam');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//This ⬆️ the same as
// const addVAT =value=>value+value*.23

console.log(addVAT(100));
console.log(addVAT(200));

const addTaxRate2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate2(0.23);

console.log(addVAT2(100));
console.log(addVAT2(200));
