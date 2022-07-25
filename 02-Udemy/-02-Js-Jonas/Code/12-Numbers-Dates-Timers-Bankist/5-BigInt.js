'use strict';

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(85465465465454665465465465454646546654654654654n); //n-> tranfer the number to Big Int

console.log(BigInt(4838432543526426));

//Operations
console.log(10000n + 10000n);
console.log(548545465465465465465465454546654n * 100000000000000000n);
// console.log(Math.sqrt(16n)); ERROR

const huge = 20204174485654654654654n;

const num = 23;
// console.log(huge * num); ERROR
console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n === 20);

console.log(typeof 20n); // big int

console.log(huge + ' is REALLY BIG NUmBer');

//Divsion

console.log(10n / 3n);
console.log(10 / 3);
// console.log(10n / 3); ERROR
