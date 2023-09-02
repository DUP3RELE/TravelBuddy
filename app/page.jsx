import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import DashboardButton from "./components/dashboardbutton";
import RegisterButton from "./components/registerbutton";

export default async function Home() {
	const session = await getServerSession(authOptions);
	let userContent;

	if (session) {
		userContent = <DashboardButton />;
	} else {
		userContent = <RegisterButton />;
	}

	return (
		<main>
			<div className='text-center'>
				<h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
					TravelBuddy
				</h1>
				<p className='mt-6 text-lg leading-8 text-gray-600'>
					Welcome in traveller!
				</p>
				<div>
					{userContent}
					<Link href='/aboutus'>
						<button className='button-one'>What are we?</button>
					</Link>
				</div>
			</div>
		</main>
	);
}
