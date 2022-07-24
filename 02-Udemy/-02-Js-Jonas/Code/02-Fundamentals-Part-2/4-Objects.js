const jonasArray = [
  "sayed",
  "abdo",
  2022 - 2001,
  "student",
  ["hello", "ahmed", "mohamed"],
];

const sayed = {
  firstName: "sayed",
  lastName: "Abdo",
  age: 21,
  job: "techer",
  friends: ["A", "B", "C"],
};
const nameKey = "Name";
console.log(sayed.friends[0]);
console.log(sayed.lastName);
console.log(sayed["firstName"]);
console.log(sayed["last" + nameKey]);

const interestedIn = prompt(
  "What do you want from me ? Choose between firstName, lastName , age,job,friend "
);

if (sayed[interestedIn]) console.log(sayed[interestedIn]);
else console.log("Wrong answer");

sayed.location = "Space";
sayed["twitter"] = "@sayed.com";
console.log(sayed);

console.log(
  `Hello I have ${sayed.friends.length} friends, And my best friend is ${sayed.friends[0]}`
);
