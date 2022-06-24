const Note = require('../models/note.models')


module.exports.getAllNotes = (req, res) => {    //controller to fetch GET ALL notes
	console.log("get all Note post");    
    
	Note.find({ })     //mongoose syntax to find ALl notes
	.then((allNotes) =>{
			console.log(allNotes);
			res.json(allNotes);        //return all data JSON
	})
	.catch((err) => {				//return error
			console.log(err);
			res.json(err);
	})
};

module.exports.createNotes =(req, res) =>{    //module to create POST notes 
	console.log(req.body);

	Notes.create(req.body)    //mongoose creating the data 
		.then((newNote) => { 
				console.log(newNote);
				res.json(newNote);
		})
		.catch((err) =>{
			console.log(err);
			res.json(err);
		})
}

module.exports.getOneNote = (req, res) => {     //module to fetch or GET Notes
	console.log("inside getOneNote");
	console.log(req.params.id);
 
	Notes.findById(req.params.id)     //function to search a note by ID
		.then((oneNote) => {
			console.log(oneNote);
			res.json(oneNote);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};


module.exports.updateNote = (req, res) => {   //Module to Update data/note HTTP Method PUT
	console.log("inside updateNote");
	console.log(req.params.id);  
	console.log(req.body);      
	Notes.findByIdAndUpdate(req.params.id, req.body, {
		new: true,   
		runValidators: true  
	})
		.then((updatedNote) => {
			console.log(updatedNote);
			res.json(updatedNote);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};

// delete Note HTTP REQUEST "DELETE"
module.exports.deleteNote = (req, res) => {
	console.log("inside deleteNote");
	console.log(req.params.id);

	Notes.findByIdAndDelete(req.params.id)
		.then((deletedNote) => {
			// this is the deleted document....your last chance!!!
			console.log(deletedNote);
			res.json(deletedNote);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};
