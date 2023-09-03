'use client'
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getNotes = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/notes", {
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

export default async function noteButtonsLogged() {
	const { notes } = await getNotes();

	return (
		<div className='flex flex-wrap'>
			{notes.map((t) => (
				<div
					key={t._id}
					className='notebox'
				>
					<div>
						<h2 className='font-bold text-2xl notebox__content'>{t.title}</h2>
						<div className='m-4'>{t.contents}</div>
					</div>
					<div className='flex gap-2 notebox__content'>
						<RemoveBtn id={t._id} />
						<Link href={`/notes/editNotes/${t._id}`}>
							<HiPencilAlt size={24} />
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}
