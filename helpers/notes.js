const fs = require("fs");
const path = require("path");

const notesFilePath = path.join(__dirname, "../db/notes.json");

// Adds a new note to an array and saves it
async function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  await writeNotesToFile(notesArray);
  return note;
}
// Removes a note from an array and updates the file
async function deleteNoteById(id, notesArray) {
  notesArray = notesArray.filter((note) => note.id != id);
  await reindexNotes(notesArray);
  await writeNotesToFile(notesArray);
  return notesArray;
}
// Updates note IDs based on their index position
async function reindexNotes(notesArray) {
  notesArray.forEach((note, index) => {
    note.id = index;
  });
}
// Writes an array of notes to a JSON file
async function writeNotesToFile(notesArray) {
  const data = { notesArray };
  const json = JSON.stringify(data, null, 2);
  await fs.writeFile(notesFilePath, json);
}

module.exports = {
  createNewNote,
  deleteNoteById,
};
