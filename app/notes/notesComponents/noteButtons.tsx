const getNotes = async () => {
	try {
		const res = await fetch("api/notes", {
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

export default async function noteButtons() {

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
					
				</div>
			))}
		</div>
	);
}
