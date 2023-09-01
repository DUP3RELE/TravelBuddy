import Link from "next/link";

export default function Aboutus() {
	return (
		<div>
			<div className='text-center'>
				<h1 className='text-4xl font-bold tracking-tight sm:text-6xl mt-10'>
					Contact me!
				</h1>
				<p className='mt-6 text-lg leading-8 text-gray-600'>
					Visit my portfolio{" "}
					<Link
						href='http://kzportfolio.pl/'
						className='animation-two'
						>
						webpage
					</Link>
				</p>
			</div>
		</div>
	);
}
