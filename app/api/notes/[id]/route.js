import { connectMongoDB } from "@/lib/mongodb";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
	try {
		const { id } = params;
		const { newTitle: title, newContents: contents } = await request.json();
		await connectMongoDB();
		await Note.findByIdAndUpdate(id, { title, contents });
		return NextResponse.json({ message: "Note updated" }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occured while updating the note." },
			{ status: 500 }
		);
	}
}

export async function GET(request, { params }) {
	try {
		const { id } = params;
		await connectMongoDB();
		const note = await Note.findOne({ _id: id });
		return NextResponse.json({ note }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occured while requesting note." },
			{ status: 500 }
		);
	}
}
