const fs = require("fs");

const getNotes = () => {
  return "My notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const filtered = notes.filter(n => n.title === title);

  if (filtered.length === 0) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log("Note added");
  } else {
    console.log("Note title already in use");
  }
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

module.exports = { getNotes: getNotes, addNote: addNote };
