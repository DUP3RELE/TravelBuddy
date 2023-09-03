import { connectMongoDB } from "@/lib/mongodb";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { title, contents } = await req.json();
		await connectMongoDB();
		await Note.create({ title, contents });
		return NextResponse.json({ message: "Note created" }, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occured while registering the note." },
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		await connectMongoDB();
		const notes = await Note.find();
		return NextResponse.json({ notes });
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occured while catching notes." },
			{ status: 500 }
		);
	}
}

export async function DELETE(request) {
	try {
		const id = request.nextUrl.searchParams.get("id");
		await connectMongoDB();
		await Note.findByIdAndDelete(id);
		return NextResponse.json({ message: "Note deleted" }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occured while deleting note." },
			{ status: 500 }
		);
	}
}
