const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
	message: String,
    creator: String,
	likes: { type: [String], default: [] },
},{timestamps: true});

module.exports = mongoose.model("Note", noteSchema);