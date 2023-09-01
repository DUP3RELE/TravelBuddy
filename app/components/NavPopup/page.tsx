"use client";

import Link from "next/link";
import Image from "next/image";
import Xmark from "@/app/img/xmark-solid.svg";

export default function NavPopup() {
	return (
		<>
			<div className='burger-section flex'>
				<div className='turnOff'>
					<Link href={'/'}>
						<button>
							<Image
								src={Xmark}
								alt='x mark'
								className='hamburger'
							/>
						</button>
					</Link>
				</div>
				<Link
					className='m-2 popup-item animation-one p-1'
					href='/'
				>
					TravelBuddy
				</Link>
				<Link
					className='m-2 popup-item animation-one p-1'
					href='/aboutus'
				>
					What is it?
				</Link>
				<Link
					className='m-2 popup-item animation-one p-1'
					href='/notes'
				>
					Notes!
				</Link>
				<Link
					className='m-2 popup-item animation-one p-1'
					href='/contact'
				>
					Contact
				</Link>
			</div>
		</>
	);
}
