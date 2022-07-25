/*
Hoisting->Makes some types of varibles accessible/usable in the code before they are actually declared 


const name = 'Sayed';

if (name === 'Sayed') {
  // console.log(`Sayed is a ${job}`); //Cannot access 'job' before initialization
  const age = 21;
  console.log(age);
  const job = 'Teacher';
  console.log(x); // x is not defined
}*/
/*
console.log(me); // output=> undefined with no error message
// console.log(you); // can't access before init
// console.log(y); // can't access before init
var me = 'x';
let you = 'y';
const year = '1999';

 */

console.log(addDecl(5, 6)); // we can call function DECLARATION before intialse it
/*
console.log(addExpr(5, 6));
console.log(addArrow(5, 6));
*These two functions will make erros like let and const because they assign the two varibles as a const to the function 

*if we make the varible var insted of const in the function this also will make a error (undefined)
we should's use var alwasys use const and let 
*/

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// no message error will appear on console because we use var !
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All product deleted!');
}
//if we will change value of our varible use let insted of var
//As a clean code the best is intialse varibles on the top

var a = 1;
let y = 2;
const z = 3;
console.log(x === window.x); // true
console.log(y === window.y); //false
console.log(z === window.z); //false
