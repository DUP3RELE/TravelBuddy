import Link from "next/link";

export default function NotePanel() {
	return (
		<>
			<div className="flex justify-center">
				<Link href={'/notesComponents/noteCreate'}>
					<button className='button-one'>Create a Note!</button>
				</Link>
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
