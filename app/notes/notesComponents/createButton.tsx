import Link from "next/link";

export default function createNoteButton() {
	return (
		<>
			<Link href={"./notes/createNotes/"}>
				<div className='button-one'>Create a Note!</div>
			</Link>
		</>
	);
}
