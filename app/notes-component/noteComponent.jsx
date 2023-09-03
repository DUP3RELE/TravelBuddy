"use client";
import { useEffect, useState } from "react";

export default function NoteComponentJS() {
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

	const moveCarousel = () => {
		const firstNote = notes.shift();
		setNotes([...notes, firstNote]);
	};

	useEffect(() => {
		const interval = setInterval(moveCarousel, 2000);
		return () => clearInterval(interval);
	}, [notes]);
	return (
		<>
				<div className='note-containter'>
					{notes.map((t) => (
						<div
							key={t._id}
							className='note-containter__carousel'
						>
							<div className='note-containter__carousel-item'>
								<h2 className='font-bold'>{t.title}</h2>
								<div>{t.contents}</div>
							</div>
						</div>
					))}
				</div>
		</>
	);
}
