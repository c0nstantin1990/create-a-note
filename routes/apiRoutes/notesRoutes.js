const router = require("express").Router();
const { createNewNote, deleteNote } = require("../../helpers/notes");
const notesArray = require("../../helpers/notes");

// GET route to retrieve all notes
router.get("/notes", (req, res) => {
  res.json(notesArray);
});

// POST route to create a new note
router.post("/notes", (req, res) => {
  const newNote = {
    id: notesArray.length.toString(),
    ...req.body,
  };

  createNewNote(newNote, notesArray);
  res.json(newNote);
});

// DELETE route to delete a note
router.delete("/notes/:id", (req, res) => {
  const { id } = req.params;

  const updatedNotesArray = deleteNote(id, notesArray);

  if (updatedNotesArray) {
    res.json({ success: true });
  } else {
    res.status(404).json({ error: "Note not found" });
  }
});

module.exports = router;
