'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (startingIndex, mainIndex) {
    return [this.starterMenu[startingIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    startingIndex = 3,
    mainIndex = 1,
    time = '20',
    address,
  }) {
    console.log(
      `Order received  ${this.starterMenu[startingIndex]} and  ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}  `
    );
  },
};
restaurant.orderDelivery({
  time: '1:30',
  address: 'Egypt',
  mainIndex: 2,
  startingIndex: 1,
});
restaurant.orderDelivery({
  address: 'EGYPT',
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// let'give them a differnt varible name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//if we delete [] after menu this will make undefined because menu does't exist in restaurant obj
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating varibles
let a = 111;
let b = 999;
const obj = { a: 23, b: 11, c: 4 };

({ a, b } = obj);
console.log(a, b);

//nested object

const {
  fri: { open: o, close: c },
} = openingHours;

console.log({ o, c });
