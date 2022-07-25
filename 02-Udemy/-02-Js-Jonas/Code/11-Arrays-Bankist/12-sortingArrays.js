'use strict';

const owners = ['Jonas', 'Zach', 'Adam', 'Ahmed', 'Abc'];
console.log(owners.sort());
console.log(owners);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

//return < 0,a,b (keep order)
//return > 0,b,a (switch order)
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
