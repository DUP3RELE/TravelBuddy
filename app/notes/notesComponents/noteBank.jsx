import NoteButtonsLogged from "./noteButtonsLogged";
import NoteButtons from "./noteButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

const getNotes = async () => {
	try {
		const res = await fetch("api/notes", {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch notes");
		}

		return res.json();
	} catch (error) {
		console.log("Error loading notes: ", error);
	}
};

export default async function NotesList() {
	const session = await getServerSession(authOptions);
	let userButtons;

	if (session) {
		userButtons = <NoteButtonsLogged />;
	} else {
		userButtons = <NoteButtons />;
	}
	await getNotes();

	return <>{userButtons}</>;
}
