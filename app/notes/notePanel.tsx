import Link from "next/link";
import CreateNoteButton from "./notesComponents/createButton";

export default function NotePanel() {
	return (
		<>
			<div className="flex justify-center">
				<CreateNoteButton />
				<Link href={'/notesComponents/noteUsers'}>
					<button className='button-one'>Check out Your notes</button>
				</Link>
				<Link href={'/notesComponents/noteBank'}>
					<button className='button-one'>Search notes</button>
				</Link>
			</div>
		</>
	);
}
