'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 200 * numPassengers
) {
  //ES5
  //numPassengers = numPassengers || 1;
  // price = price || 200;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 11, 777);
createBooking('LH123', 2);
createBooking('LH123', 4);
createBooking('LH123', undefined, 1000);
