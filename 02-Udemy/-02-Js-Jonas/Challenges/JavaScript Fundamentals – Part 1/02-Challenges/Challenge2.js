/*
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
*/
const massMark = 95,
  massJohn = 85;
const hightMark = 1.88,
  hightJohn = 1.76;

const BMImark = massMark / hightMark ** 2;
const BMIjohn = massJohn / hightJohn ** 2;
const markHigherBMI = BMImark > BMIjohn; // true

if (BMIjohn > BMImark) {
  console.log(`John's BMI (${BMIjohn}) is higher than (${BMImark}) Mark's!`);
} else {
  console.log("John's BMI (${BMIjohn}) is higher than (${BMImark}) Mark's!");
}
