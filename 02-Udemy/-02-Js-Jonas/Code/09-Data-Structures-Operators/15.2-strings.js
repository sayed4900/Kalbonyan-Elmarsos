'use strict';

const airline = 'TAP Air Portugal';
console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

const passenger = 'sAyED';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//Comparing Email
const email = 'hello@sayed.io';
const loginEmail = '  Hello@sayed.Io \n'; // '\n (Enter )
const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail);
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log('---------------------------------------------------------------');
// const checkString = function checkString(stringTest, stringCorrect) {
//   console.log(stringTest);
//   console.log(stringCorrect);
//   if (stringTest.lenght !== stringCorrect.lenght) return false;
//   for (let i = 0; i < stringTest.lenght; i++)
//     if (stringTest[i] !== stringCorrect[i]) return false;
//   return true;
// };
// console.log(checkString(email, lowerEmail));
// console.log(checkString(email, normalizedEmail));

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to Boarding door 23. Boording door 23! ';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate')); // it work well

console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airpus A320neo';
console.log(plane.includes('A32'));
console.log(plane.includes('noe'));
console.log(plane.includes('neo'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('A32'));

if (plane.startsWith('Airpus') && plane.endsWith('neo')) {
  console.log('Part of the new airplane family ');
}

//practice exercise
function checkBaggae(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are not allowed on board');
  else console.log('Welcome aboard!');
}

console.log(checkBaggae('I have a laptop, Knife '));
console.log(checkBaggae('I like playing games '));
console.log(checkBaggae('I have a  Gun '));
