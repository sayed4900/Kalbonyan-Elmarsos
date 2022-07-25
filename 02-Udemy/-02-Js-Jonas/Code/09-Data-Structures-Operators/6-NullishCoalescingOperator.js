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

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 20;
console.log(guests1); // 20

//Nullis: null and undefined (NOT 0 or '')-----0 and '' are truthy values in Nullish operator
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
//if the restaurant.numGuests is null or undefined the guestCorrect = 10 ;
