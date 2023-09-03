import Link from "next/link";
import CreateNoteButton from "./notesComponents/createButton";

export default function NotePanel() {
	return (
		<>
			<div className="flex justify-center">
				<CreateNoteButton />
				<Link href={'/notes'}>
					<button className='button-one'>Check out notes!</button>
				</Link>
			</div>
		</>
	);
}
