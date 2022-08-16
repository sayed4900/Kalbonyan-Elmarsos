// let and const

// let name = "sayed";
// console.log(name);

// name = "ahmed";
// console.log(name);
//code work well 👍

// const name = "sayed";
// console.log(name);

// name = "ahmed";
// console.log(name);
//Error happen

//Arrow Functions
const arrowFun = name => {
  console.log(name);
};
arrowFun('SAYEd');

const divdie = number => number / 2;

console.log(divdie(10));

// Exports and Imports
import p from '/per.js';
console.log(p);
import { clean as cln } from './utilits.js';
cln();

//Understanding Classes
// class Color {
//   constructor() {
//     this.color = 'Black';
//   }
//   printColor() {
//     console.log(this.color);
//   }
// }
// class Car extends Color {
//   constructor() {
//     super();
//     this.name = 'BMW';
//   }
//   printMyCar() {
//     console.log(this.name);
//   }
// }

// Classes, Properties and Methods
// class Color {
//   constructor() {
//     color = 'Black';
//   }
//   printColor = () => {
//     console.log(this.color);
//   };
// }
// class Car extends Color {
//   name = 'BMW';

//   printMyCar = () => {
//     console.log(this.name);
//   };
// }
// const c = new Car();
// c.printColor();
// c.printMyCar();

//The Spread & Rest Operator

const arr = [1, 2, 3];
const newArr = [...arr, 100000]; // spread operator
console.log(newArr);
//This syntax enable in es6
// class person =  {
//   constructor() {}
//   name = 'sayed';
// }
// class newPerson =  {
//   ...person,
//   age : 21 ;
// }
// console.log(newPerson);

const filter = (...args) => {
  return args.filter(el => el === 1)[0];
};

console.log(filter(1, 2, 3));

//Destructing

const arr2 = ['hello', 'sayed', 'abdo'];
const [a, b] = arr2;
console.log(a);
console.log(b);

//Reference and Primitive Types Refresher
const numb1 = 10;
const num2 = numb1;
console.log(num2);
//nums is a copy of numb1 => i have 2 values in memory = 10

const firstPerson = {
  name: 'sayed',
};
const secondPerson = firstPerson;

console.log(secondPerson);
//secondPerson is point to firstPerson => this mean i have on copy from the object data and two pointers copies and to make a real copy use spread operator in secondPerson
//like this

const n = [1, 2, 3];
const duplicatN = n.map(n => n * 2);
console.log(duplicatN);
