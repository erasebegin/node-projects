const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const hasDuplicate = notes.find(n => n.title === title);
  if (hasDuplicate.length > 0) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note added"));
  } else {
    console.log(chalk.red.inverse("Note title already in use"));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const filteredNote = notes.find(n => n.title === title);
  if (filteredNote.length === 0) {
    console.log(chalk.red.inverse("Could not find a note with that title"));
  } else {
    console.log(chalk.green.inverse(`Note "${title}" removed`));
  }
  saveNotes(filteredNote);
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach(n => console.log(n.title));
};

const readNote = title => {
  const notes = loadNotes();
  const selectedNote = notes.find(n => n.title === title);
  console.log(`Title: ${selectedNote.title}\n\n${selectedNote.body}`);
};

const saveNotes = notes => {
  notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    const noteData = JSON.parse(dataJSON);
    return noteData;
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
