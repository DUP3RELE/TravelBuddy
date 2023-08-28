import Image from "next/image";
import icon from "./logo-no-background.png";
import wave from "./img/wave-haikei-light-top.svg";
import Link from "next/link";

export default function Nav() {
	return (
		<nav>
			<div className='flex items-center justify-between top-section w-full'>
				<div>
					<Link href='/'>
						<Image
							src={icon}
							alt='Travel Buddy logo'
							className='dark:invert m-2 text-2xl font-bold mr-4 ml-4'
							width={100}
							height={100}
						/>
					</Link>
				</div>
				<nav className='hidden lg:flex space-x-4 nav'>
					<Link
						className='m-2 animation-one p-1'
						href='/'
					>
						TravelBuddy
					</Link>
					<Link
						className='m-2 animation-one p-1'
						href='/aboutus'
					>
						What is it?
					</Link>
					<Link
						className='m-2 animation-one p-1'
						href='/notes'
					>
						Notes!
					</Link>
					<Link
						className='m-2 animation-one p-1'
						href='/contact'
					>
						Contact
					</Link>
				</nav>
				<div className=' items-center mr-5'>
					<Link
						className='m-1 animation-one'
						href='/login'
					>
						Log in /
					</Link>
					<Link
						className='animation-one'
						href='/login/registerpanel'
					>
						Register
					</Link>
				</div>
			</div>
			<div>
				<Image
					className='w-full'
					src={wave}
					alt='fala'
				/>
			</div>
		</nav>
	);
}
