const age = 15;
const isOldEnough = age >= 18; // boolean statment

if (isOldEnough) {
  console.log("Sara can start driving license🚘");
} else {
  const yearLeft = 18 - age;
  console.log(`Sara is too young. Wait another ${yearLeft} years 
Play away Sara :)`);
}

const birthYear = 1998;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
