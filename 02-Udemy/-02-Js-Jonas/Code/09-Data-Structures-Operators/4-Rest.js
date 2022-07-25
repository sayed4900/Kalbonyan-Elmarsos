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
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//1) Destructuring

//Spread because it is on right side of  =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//Rest because on left side of =
const [a, b, ...other] = [1, 2, 3, 4, 5, 6];
console.log(a, b, other);
//other is rest so its take the rest of the array and put in new array

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Object
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};
console.log(add(1, 2, 3, 4));
const x = [5, 5, 5];
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
/*
So the spread operator is used

where we would otherwise write values, separated by a comma.

On the other hand the rest pattern is basically used

where we would otherwise write variable names

separated by commas.

So, again the rest pattern can be used

where we would write variable names, separated by commas

and not values separated by commas.

So it's a subtle distinction, but this is how you know
 */
