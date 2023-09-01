import mongoose, { Schema, models } from "mongoose";

const noteSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Note = models.Note || mongoose.model("Note", noteSchema);
export default Note;
