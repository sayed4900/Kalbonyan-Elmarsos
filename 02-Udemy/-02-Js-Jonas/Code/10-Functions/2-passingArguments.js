'use strict';

const flight = 'LH234';
const sayed = {
  name: 'Sayed Abdo',
  passport: 123456789,
};

const checkIn = function (flightName, passenger) {
  flightName = 'LH555';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 123456789) {
    alert('Checked in');
  } else alert('Wrong passport!');
};

checkIn(flight, sayed);
console.log(flight);
console.log(sayed);

const flighNum = flight;
const passenger = sayed;
//Now flighNum is same as flight if we change any thing in flightNum and the change we also apply in flight because they have now the same memory heap the same thing to passenger and sayed objects

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(passenger);
checkIn(flight, sayed);

//JavaSCript is only passing by value but C++ passing by value or reference
