'use strict';

/*const sayed = {
  year: 2000,
  calcAge: function () {
    console.log(this.year); // at the runtime this.year will be sayed.year
  },
};
sayed.calcAge();
*/
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // if we are't in the strict mode, Output will be window like the  line 2
};
calcAge(2000);
console.log('******************************************');
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // output is window. Because arrow function does not get its own this keyword.
};
calcAgeArrow(2007);

const sayed = {
  year: 2000,
  calcAge: function () {
    console.log(this); //at the runtime this  will be sayed (this is dynamic not static)
    console.log(2020 - this.year);
  },
};
sayed.calcAge(); // object will be print in the console

const mohamed = {
  year: 1999,
};
mohamed.calcAge = sayed.calcAge;
//we copy the method from sayed to mohamed

//and now we can use calcAge in mohamed
mohamed.calcAge();

const f = sayed.calcAge; // f now function but if we call it we have error undefined
// f();
