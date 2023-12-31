"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import NotePanel from "../notes/notePanel";

export default function UserInfo() {
	const { data: session } = useSession();

	return (
		<div className='text-center'>
			<div>
				Hello <span className='font-bold'>{session?.user?.name}</span>, do You
				want to create some notes?
			</div>
			<div className="m-2">
				<NotePanel />
			</div>
			<button
				onClick={() => signOut()}
				className='bg-red-500 text-white font-bold px-6 py-2 mt-3 rounded-lg drop-shadow-lg'
			>
				Log Out
			</button>
		</div>
	);
}
