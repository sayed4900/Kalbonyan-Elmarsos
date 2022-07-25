'use strict';
/*
//Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Sayed Abdo'.split(' '));

const [firstName, lastName] = 'Sayed Abdo'.split(' ');
console.log(firstName);
console.log(lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
*/
const capitalizeName = function (name) {
  const names = name.split('   '); // names is array
  const upperNames = [];
  for (const n of names) {
    // upperNames.push(n[0].toUpperCase() + n.slice(1));
    upperNames.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(upperNames.join(' '));
};

capitalizeName('mohaamed abn abdllah ');
//////

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(25, '+'));
console.log('Sayed'.padStart(20, '+').padEnd(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '+');
};

console.log(maskCreditCard(123456789));
console.log(maskCreditCard(1234567891011121314151617181920));
console.log(maskCreditCard('567891011118121314151617920'));

//Repeat
const message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(2));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
console.log(planeInLine(21));
console.log(planeInLine(5));
