const friend1 = "Ahmed";
const friend2 = "Mohamed";
const friend3 = "Mohamoud";

const friends = ["Ahmed", "Mohamed", "Mohamoud"];

console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);

friend1[0] = "Ashraf";
console.log(friends[0]);

const firstName = "Sayed";
const sayed = [firstName, "Abdo", 2022 - 2001, friends];
console.log(sayed);
console.log(sayed.length);

// another to create array
const years = new Array(1959, 1968, 1988, 1994);
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

console.log(calcAge(years[0]));

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
];
console.log(ages);

//ARRAY OPERATIONS

friends.push("a"); // add value to end of array
friends.push("a");
console.log(friends);
friends.unshift("sayed");
console.log(friends);

friends.pop(); // delete last
console.log(friends);
friends.shift(); // delete first
console.log(friends);
console.log(friends.indexOf("a"));
console.log(friends.indexOf("aa"));
console.log(friends.includes("a")); // includes give true || false
console.log(friends.includes("aa")); // includes give true || false

friends.push("1");
console.log(friends.includes(1)); // includes give true || false
