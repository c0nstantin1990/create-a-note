const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  writeNotesToFile(notesArray);
  return note;
}

function deleteNote(id, notes) {
  const notesArray = notes.filter((el) => el.id != id);
  reindexNotes(notesArray);
  writeNotesToFile(notesArray);
  return notesArray;
}
function writeNotesToFile(notesArray) {
    const filePath = path.join(__dirname, '../db/notes.json');
    const data = JSON.stringify({ notesArray }, null, 2);
    fs.writeFileSync(filePath, data);
  }
  

module.exports = {
  createNewNote,
  deleteNote,
};
