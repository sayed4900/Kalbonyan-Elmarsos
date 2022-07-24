"use strict";
/*
function logger() {
  console.log("my name is Sayed ");
}
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
//invoking function
logger();
logger();

const appleJuice = fruitProcessor(5, 10);
console.log(appleJuice);

console.log(fruitProcessor(1, 2));
*/
/*
//Function Declarations vs. Expressions

//Function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(1959);

//Function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge1(1968);

console.log(age1, age2);

//Arrow fuction

const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirment = 65 - age;
  return `${firstName} retires in ${retirment}`;
};

console.log(yearsUntilRetirement(1991, "sayed"));
console.log(yearsUntilRetirement(1991, "sayed"));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples); // 8
  const orangePieces = cutFruitPieces(oranges); // 12

  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/
//Reviev functions

const calcAge1 = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge1(birthYear);
  const retirment = 65 - age;
  if (retirment > 0) {
    console.log(`${firstName} retires in ${retirment} years`);
    return retirment;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1, "Someone"));
