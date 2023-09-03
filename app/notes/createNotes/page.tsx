"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddNote() {
	const [title, setTitle] = useState("");
	const [contents, setContents] = useState("");

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!title || !contents) {
			alert("Title and contents are required.");
			return;
		}

		try {
			const res = await fetch("../api/notes", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ title, contents }),
			});

			if (res.ok) {
				router.push("/notes");
			} else {
				throw new Error("Failed to create a note");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<> <div className="m-5 font-bold">
			<h1>Create Your note!</h1>
		</div>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-3 m-5 max-w-lg'
			>
				<input
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					className='border border-slate-500 px-8 py-2'
					type='text'
					placeholder='Note Title'
				/>

				<input
					onChange={(e) => setContents(e.target.value)}
					value={contents}
					className='border border-slate-500 px-8 py-2'
					type='text'
					placeholder='Note contents'
				/>

				<button
					type='submit'
					className='bg-green-600 font-bold text-white py-3 px-6 w-fit'
				>
					Add Note
				</button>
			</form>
		</>
	);
}
