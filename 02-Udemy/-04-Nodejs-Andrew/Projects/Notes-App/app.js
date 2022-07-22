//////////////

const yargs = require("yargs");

const chalk = require("chalk");
const validator = require("validator");

const notes = require("./notes.js");
const { readNote } = require("./notes.js");
const { argv } = require("yargs");
// console.log(process.argv);

//Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new node",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("Title " + argv.title);
    // console.log("Body: " + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//Challenge Add two new commands //

// List command
yargs.command({
  command: "list",
  describe: "list your notes",
  handler: function () {
    notes.listNotes();
  },
});

// Read Command
yargs.command({
  command: "read",
  describe: "read your notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

////////////////
console.log(yargs.argv);

// const command = process.argv[2];
// console.log(process.argv[2]);

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("removing note!");
// }
