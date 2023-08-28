import Link from "next/link";

export default function Aboutus() {
	return (
		<div>
			<h1 className='text-center text-3xl font-bold tracking-tight sm:text-5xl'>
				What is TravelBuddy?
			</h1>
			<p className='m-4 flex justify-center'>
				Travel buddy is a platform created to help travellers all around the
				world! You can post and read notes from people who live in the city that
				You are visiting!
			</p>
			<p className='m-4 flex justify-center'>
				If You are local - post tips about Your city or country to help visitors
				and get points!
			</p>
			<p className='m-4 flex justify-center'>
				If You are a visitor - read notes about city or country that You are
				visiting to get information that will make Your trip easier and more
				pleasant!
			</p>
			<div className='textc-center flex justify-center'>
				<Link href='/login/registerpanel'>
					<button className='button-one'>Register</button>
				</Link>
				<Link href='/notes'>
					<button className='button-one'>Check out notes!</button>
				</Link>
			</div>
		</div>
	);
}
