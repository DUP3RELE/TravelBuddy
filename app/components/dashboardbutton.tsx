import Link from "next/link";

export default function dashboardButton() {
	return (
		<Link href='/dashboard/'>
			<button className='button-one'>Dashboard</button>
		</Link>
	);
}
