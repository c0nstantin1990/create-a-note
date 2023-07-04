const fs = require("fs");
const path = require("path");
//Adds a new note to an array and saves it
function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  writeNotesToFile(notesArray);
  return note;
}
//Removes a note from an array and updates the file
function deleteNote(id, notesArray) {
  const filteredNotes = notesArray.filter((el) => el.id !== id);
  reindexNotes(filteredNotes);
  writeNotesToFile(filteredNotes);
  return filteredNotes;
}
//Writes an array of notes to a JSON file
function writeNotesToFile(notesArray) {
  const filePath = path.join(__dirname, "../db/notes.json");
  const data = JSON.stringify({ notesArray }, null, 2);
  fs.writeFileSync(filePath, data);
}
//Updates note IDs based on their index position
function reindexNotes(notesArray) {
  notesArray.forEach((note, index) => {
    note.id = index;
  });
}

module.exports = {
  createNewNote,
  deleteNote,
};
