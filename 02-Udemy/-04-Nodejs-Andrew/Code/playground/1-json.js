const fs = require("fs");
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// const parseData = JSON.parse(bookJSON); convet string to object
// console.log(parseData.author);

//Challenge

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Sayed";
user.age = "21";

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
