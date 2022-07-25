'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1980);
console.log(jonas);

const metilda = new Person('Metilda', 1990);
const jack = new Person('Jack', 1985);
const jay = 'Jay';
console.log(metilda, jack);

console.log(metilda instanceof Person);
console.log(jay instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

jonas.calcAge();
metilda.calcAge();

console.log(jonas.__proto__);
console.log(metilda.__proto__);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(metilda));
console.log(Person.prototype.isPrototypeOf(Person));

//PrototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, metilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.prototype);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 4, 5, 6, 7, 7, 8];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
