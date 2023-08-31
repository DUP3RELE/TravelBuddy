"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function UserPanel() {

	const { data: session } = useSession();

	return (
		<div className=' items-center mr-5'>
			Hello
			<Link
				className='m-1 animation-one'
				href='/dashboard'
			>
				<span className='font-bold'>{session?.user?.name}</span>
			</Link>
		</div>
	);
}
