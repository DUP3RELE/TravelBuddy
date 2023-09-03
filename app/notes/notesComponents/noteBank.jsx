import NoteButtonsLogged from "./noteButtonsLogged";
import NoteButtons from "./noteButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function NotesList() {
	const session = await getServerSession(authOptions);
	let userButtons;

	const getNotes = async () => {
		try {
			const res = await fetch("https://travel-buddy1.vercel.app/api/notes", {
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

	if (session) {
		userButtons = <NoteButtonsLogged />;
	} else {
		userButtons = <NoteButtons />;
	}
	await getNotes();

	return <>{userButtons}</>;
}
