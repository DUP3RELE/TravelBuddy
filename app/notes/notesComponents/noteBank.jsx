import NoteButtonsLogged from "./noteButtonsLogged";
import NoteButtons from "./noteButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function NotesList() {
	const session = await getServerSession(authOptions);
	let userButtons;

	if (session) {
		userButtons = <NoteButtonsLogged />;
	} else {
		userButtons = <NoteButtons />;
	}

	return <>{userButtons}</>;
}
