'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
//Rewrite this ⬆️ function using arrow functoin(Challenge)
const greet2 = greeting => {
  return function (name) {
    console.log(`My answer   ${greeting} ${name}`);
  };
};
const greetArr = greeting => name =>
  console.log(`Jonas answer => ${greeting} ${name}`);
//This  ⬇️ value now is a function
const greetHey = greet('HEY!');

greetHey('Sayed');
greetHey('Abdo');

greet('Hello')('Jonas');

greet2('WELCome')('SAyed');
greetArr('HELLO')('MAN');
