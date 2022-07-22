const { default: chalk } = require("chalk");
const fs = require("fs");
const { title } = require("process");
const { scriptName } = require("yargs");
// const chalk = require("chalk");
const getNotes = () => {
  return "Your Notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note Title taken");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
/////////////////////////////////////////////////////////////////////////////////
const removeNote = (title) => {
  const notes = loadNotes();

  const noteTokeep = notes.filter((note) => note.title !== title);

  if (notes.length > noteTokeep.length) {
    saveNotes(noteTokeep);
    console.log(chalk.green.inverse("NOTE REMOVED"));
  } else {
    console.log(chalk.red.inverse("No one found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);
  if (duplicateNote) {
    console.log(chalk.inverse(duplicateNote.title));
    console.log(duplicateNote.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
