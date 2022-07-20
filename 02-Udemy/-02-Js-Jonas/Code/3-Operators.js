const now = 2022;
const ageSayed = now - 2001;
const ageMohamed = now - 1998;
console.log(ageSayed, ageMohamed);

console.log(ageSayed * 2, ageSayed / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 (2*2*2);

const firstName = "Sayed";
const lastName = "Abdo";
console.log(firstName + " " + lastName);

// Assingnemnt operator
let x1 = 10 + 5;
x1 += 10; // x=15 , x1= x1 + 10 , x1 = 25
console.log(x1); //15

// Compersion Operators
console.log(ageSayed > ageMohamed);
console.log(ageSayed >= 21);
console.log(now - 2001 > now - 1998);

let x2, y1;
x2 = y1 = 25 - 15; // this will work from right to left, y = 10 then x= 10
console.log(x2, y1);
const avrAge = (ageMohamed + ageSayed) / 2;
console.log(avrAge);
