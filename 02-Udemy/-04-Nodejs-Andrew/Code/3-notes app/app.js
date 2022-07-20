//////////////
// Challenge: Define and use a function in new file
// import chalk from "chalk";

const chalk = require("chalk");
const validator = require("validator");
const getNotes = require("./notes");
const msg = getNotes();
console.log(msg);

// console.log(validator.isEmail("sayed@a.com"));
// console.log(validator.isURL("sayed.com"));
const greenMsg = chalk.red.bold("Sayed");
console.log(greenMsg);
////
// const add = require("./utils");
// // const name = "Sayed";
// const sum = add(2, 3);
// console.log(sum);
