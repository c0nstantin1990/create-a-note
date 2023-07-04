const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  writeNotesToFile(notesArray);
  return note;
}

function deleteNote(id, notesArray) {
  const filteredNotes = notesArray.filter((el) => el.id !== id);
  reindexNotes(filteredNotes);
  writeNotesToFile(filteredNotes);
  return filteredNotes;
}

function writeNotesToFile(notesArray) {
  const filePath = path.join(__dirname, "../db/notes.json");
  const data = JSON.stringify({ notesArray }, null, 2);
  fs.writeFileSync(filePath, data);
}

function reindexNotes(notesArray) {
  notesArray.forEach((note, index) => {
    note.id = index;
  });
}

module.exports = {
  createNewNote,
  deleteNote,
};
