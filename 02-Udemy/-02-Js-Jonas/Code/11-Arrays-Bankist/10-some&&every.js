'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const acc = [100, 200, 300];
console.log(movements);
//Equality
console.log(movements.includes(-130));

//Some: Condition
console.log(movements.some(mov => mov === -130));

//If there is any value > 5000, The function will return true !
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);

//Every
//If all values are > 0 the funtion will return TRUE
console.log(movements.every(mov => mov > 0));
console.log(acc.every(mov => mov > 0));

//Separate Callback exampel to use => don't repeat yourself
const deposit = mov => mov > 0;
console.log(movements.every(deposit));
console.log(movements.some(deposit));
console.log(movements.filter(deposit));
