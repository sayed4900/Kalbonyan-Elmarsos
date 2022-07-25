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
  orderPaste: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arr = [7, 8, 9, 10];
const badNewArr = [1, 2, arr[0], arr[1], arr[2], arr[3]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // print elements individuals

const newMenu = [...restaurant.mainMenu, 'Gnocci', 'as'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays

// const joinTwoArrays = Object.assign({ mainMenuCopy, newMenu });
const joinTwoArrays = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinTwoArrays);

//iterables: arrays, strings, maps, sets, NOT Objext

const str = 'sayed';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(str);
console.log(...str);

// console.log(`${...str} abdo`);
/*multiple values separated by a comma are usually only expected when we pass arguments into a function,or when we build a new array.

*/

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

// restaurant.orderPaste(ingredients[0], ingredients[1], ingredients[2]);
//This ⬆️ is equal to this⬇️
restaurant.orderPaste(...ingredients);

//let's create new object has all data of restaurant and new data
const newRestaurant = { founderIn: 1999, ...restaurant, founder: 'Giza' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Egypt Zagzing';
console.log(restaurant.name, restaurantCopy.name);
