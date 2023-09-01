"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const getNotes = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/Notes", {
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

export default function RemoveBtn({ id }) {
	const router = useRouter();
	const removeNote = async () => {
		const confirmed = confirm("Are you sure?");

		if (confirmed) {
			const res = await fetch(`http://localhost:3000/api/Notes?id=${id}`, {
				method: "DELETE",
			});

			if (res.ok) {
				router.refresh();
			}
		}
	};

	return (
		<button onClick={removeNote}>
			<HiOutlineTrash size={24} />
		</button>
	);
}
