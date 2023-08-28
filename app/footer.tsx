"use client";
import Image from "next/image";
import Link from "next/link";
import icon from "./logo-no-background.png";

import waveBottom from "./img/wave-haikei-light-bottom.svg";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div>
			
			<Image
				className='w-full bottom-12 fixed'
				src={waveBottom}
				alt='fala'
			/>
			<div className='w-full flex justify-center fixed bottom-0'>
				<div className='w-1/4 footerColors z-10'>
					<h1 className='text-bold m-1'> {currentYear} Travel Buddy</h1>
					<h2>© Krystian Żywczak</h2>
				</div>
				<div className='w-1/4 footerColors z-10'>
					<Image
						src={icon}
						alt='Travel Buddy logo'
						className='dark:invert m-2 text-2xl font-bold mr-4 ml-4'
						width={70}
						height={70}
					/>
				</div>
				<div className='w-1/4 footerColors z-10'>
					<h1 className='m-4'>Do You like this webpage? Contact me!</h1>
				</div>
				<div className='w-1/4 footerColors z-10 flex justify-end'>
					<nav className='flex m-3'>
						<Link
							href='/'
							className='m-1'
						>
							Main
						</Link>
						<Link
							href='/notes'
							className='m-1'
						>
							Notes
						</Link>
						<Link
							href='/aboutus'
							className='m-1'
						>
							About us
						</Link>
						<Link
							href='/contact'
							className='m-1'
						>
							Contact
						</Link>
					</nav>
				</div>
			</div>
		</div>
	);
}
