const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  writeNotesToFile(notesArray);
  return note;
}



module.exports = {
  createNewNote,
  
};
