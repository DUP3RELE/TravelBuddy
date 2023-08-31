import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const noteSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
		required: true,
	},
});

const Note = models.Note || mongoose.model("Note", noteSchema);

const User = models.User || mongoose.model("User", userSchema);
export default User;
