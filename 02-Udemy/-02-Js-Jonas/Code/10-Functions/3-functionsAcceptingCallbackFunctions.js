'use strict';

//This function take any string and return new one without any spaces
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

//High-order function
const transformer = function (str, fn) {
  console.log(`Orginal string: ${str}`);
  console.log(`Tranformed string: ${fn(str)}`);

  console.log(`Tranformed by: ${fn.name}`);
};

//(callback function)-----------------(higher order function)
transformer('JavaScript is the best!', upperFirstWord); //we only passing the funtion not call it
transformer('JavaScript is the best!', oneWord); //we only passing the funtion not call it

//JS uses call back all the time
const high5 = function () {
  console.log('👋');
};

//addEventListener like transformer (callback function) and high5 like upperFirstWord or oneWord (higher order function)
document.body.addEventListener('click', high5);

['sayed', 'abdo', 'Noah'].forEach(high5);
