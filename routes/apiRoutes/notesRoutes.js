const express = require("express");
const router = express.Router();
const { createNewNote, deleteNoteById } = require("../lib/notes");
const notesFilePath = require("../db/notes.json");

router.get("/", (req, res) => {
  res.json(notesFilePath.notesArray);
});

router.post("/", (req, res) => {
  const notesArray = notesFilePath.notesArray;
  const nextId = notesArray.length.toString();
  req.body.id = nextId;
  const newNote = createNewNote(req.body, notesArray);
  res.json(newNote);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const notesArray = notesFilePath.notesArray;
  const updatedNotes = await deleteNoteById(id, notesArray);
  res.json(updatedNotes);
});

module.exports = router;
