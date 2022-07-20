const firstName = "sayed";
const job = "Student";
const birthYear = 2005;
const year = 2022;

const sayed =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(sayed);

const newSayed = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(newSayed);

console.log("String with \n\
multiple\n\
lines ");

console.log(`String 
multiple 
lines`);
