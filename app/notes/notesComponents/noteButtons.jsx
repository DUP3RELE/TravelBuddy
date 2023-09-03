'use client'
import { useEffect, useState } from "react";

export default function NoteButtons() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		const getNotes = async () => {
			try {
				const res = await fetch("api/notes", {
					cache: "no-store",
				});

				if (!res.ok) {
					throw new Error("Failed to fetch notes");
				}

				const data = await res.json();
				setNotes(data.notes);
			} catch (error) {
				console.log("Error loading notes: ", error);
			}
		};

		getNotes();
	}, []);

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
				</div>
			))}
		</div>
	);
}
