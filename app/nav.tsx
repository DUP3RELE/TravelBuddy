import Image from "next/image";
import icon from "./logo-no-background.png";
import wave from "./img/wave-haikei-light-top.svg";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LogRegButtons from "./components/logregbuttons";
import UserPanel from "./dashboard/userPanel";
import hamburger from "./img/bars-solid.svg";

export default async function Nav() {
	const session = await getServerSession(authOptions);
	const userContent = Boolean(session) ? <UserPanel /> : <LogRegButtons />;

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
				<Link
					href='/components/NavPopup/'
					className=''
				>
					<button
						className='hidden max-lg:flex nav-button'
					>
						<Image
							src={hamburger}
							alt='hamburger icon'
							className='hamburger'
						/>
					</button>
				</Link>
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
				<div>{userContent}</div>
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
