const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.get("/api/notes", (req, res) => {
  // Implement the logic to fetch notes from the database and send the response
});

app.post("/api/notes", (req, res) => {
  // Implement the logic to save a new note to the database and send the response
});

app.delete("/api/notes/:id", (req, res) => {
  // Implement the logic to delete a note from the database and send the response
});

// Serve the React application
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
