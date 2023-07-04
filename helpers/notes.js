const fs = require("fs").promises;
const path = require("path");

// Adds a new note to an array and saves it
async function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  await writeNotesToFile(notesArray);
  return note;
}
// Removes a note from an array and updates the file
async function deleteNote(id, notesArray) {
  const updatedNotesArray = notesArray.filter((el) => el.id != id);
  await writeNotesToFile(updatedNotesArray);
  return updatedNotesArray;
}
// Writes an array of notes to a JSON file
async function writeNotesToFile(notesArray) {
  try {
    const filePath = path.join(__dirname, "../db/notes.json");
    await fs.writeFile(filePath, JSON.stringify({ notesArray }, null, 2));
  } catch (error) {
    console.error("Error writing notes to file:", error);
    throw error;
  }
}

module.exports = {
  createNewNote,
  deleteNote,
};
