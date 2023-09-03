"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const getNotes = async () => {
	try {
		const res = await fetch("Notes", {
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
			const res = await fetch(`api/notes?id=${id}`, {
				method: "DELETE",
			});

			if (res.ok) {
				router.refresh();
			}
			setInterval(() => {
				window.location.reload(); // Przeładowanie strony co 1,5 sekundy
			}, 1500);
		}
	};

	return (
		<button onClick={removeNote}>
			<HiOutlineTrash size={24} />
		</button>
	);
}
