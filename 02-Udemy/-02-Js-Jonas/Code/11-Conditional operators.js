const age = 23;

// age >= 18
//   ? console.log("I like to dring Birel ")
//   : console.log("I like to dring water ");

const drink = age >= 18 ? "Birel" : "water";
console.log(drink);
// tranform code if statment
let drink2;
if (age >= 18) drink2 = "Birel";
else drink2 = "water";
console.log(drink2);

console.log(
  `I like to drink ${age >= 18 ? (drink2 = "Birel") : (drink2 = "water")} !`
);
