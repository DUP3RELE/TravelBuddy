import NoteBank from "./notesComponents/noteBank";
import CreateNoteButton from "./notesComponents/createButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function NotesPage() {
	const session = await getServerSession(authOptions);
	let userContent;

	if (session) {
		userContent = <CreateNoteButton />;
	} else {
		userContent = "";
	}
	return (
		<div>
			<div className='flex justify-between'>
				<h1 className='m-3 text-lg'>Here You can browse notes!</h1>
				<div>{userContent}</div>
			</div>
			<NoteBank />
            <div className="h-60"></div>
		</div>
	);
}
