// for (let rep = 1; rep <= 10; rep++) console.log("loop number", rep);
/*
const jonasArray = [
  "sayed",
  "abdo",
  2022 - 2001,
  "student",
  ["hello", "ahmed", "mohamed"],
  true,
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2005, 2007, 1999];
const ages = [];

for (let i = 0; i < years.length; i++) ages.push(2022 - years[i]);
console.log(ages);

//continue and break

console.log("***********************************************************");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("***********************************************************");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}
/////////////////
console.log("print array backword");
const sayed = [
  "Sayed",
  "Abdo",
  2022 - 2001,
  "student",
  ["ashraf", "ahmed", "mohamed"],
];

for (let i = sayed.length - 1; i >= 0; i--) console.log(sayed[i]);

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 6; rep++)
    console.log(`Exercise ${exercise} repetition ${rep}`);
}
*/
let rep = 1;
while (rep <= 10) {
  // console.log(`While of rep${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) console.log("End loop");
}
