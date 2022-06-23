const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
	message: String,
    name: String,
    creator: String,
	likes: { type: [String], default: [] },
	createdAt: {
        type: Date,
        default: new Date(),
    },
},{timestamps: true});

module.exports = mongoose.model("Note", noteSchema);