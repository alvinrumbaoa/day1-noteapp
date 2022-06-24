const NoteController = require('../controllers/note.controllers');

module.exports = function(app) {
	// get all notes 
	app.get("/api/notes", NoteController.getAllNotes);
	// create note
	app.post("/api/notes", NoteController.createNotes);
	// get one note
	// create a param variable called "id"
	app.get("/api/notes/:id", NoteController.getOneNote);
	// update note
	app.put("/api/notes/:id", NoteController.updateNote);
	// delete note
	app.delete("/api/notes/:id", NoteController.deleteNote);
}


