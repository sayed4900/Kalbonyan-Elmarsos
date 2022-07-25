'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  //console.log(firstName); // firstName is global varible
  let out = `${firstName}, You are ${age}, born in ${birthYear}`;
  function printAge() {
    var millenial = true;
    const firstName = 'Mohamed';

    console.log(out);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      out = 'NEW OUTPUT!'; // redfined varible
    }
    console.log(out);
    // console.log(str); this make error because it is scope in block if only
    console.log(millenial); // this will work beacause it is var ais function scope and this mean we can use it in any placec in the function
    // add(2, 3); it is blocked scope
  }
  printAge();
  return age;
}

const firstName = 'Sayed';
calcAge(1988);
//We can't access function printAge because it is child in calcAge and the scope in it
