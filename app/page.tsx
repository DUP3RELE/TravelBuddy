import Link from "next/link";

export default function Home() {
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
					<Link href='/login/registerpanel'>
						<button className='button-one'>Register</button>
					</Link>
					<Link href='/aboutus'>
						<button className='button-one'>What are we?</button>
					</Link>
				</div>
			</div>
		</main>
	);
}
