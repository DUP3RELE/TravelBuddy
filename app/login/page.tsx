import LoginPanel from "./loginpanel/page";
import Link from "next/link";

export default async function LogIn() {
	return (
		<div className='text-center justify-center'>
			<h1 className='text-4xl font-bold tracking-tight sm:text-6xl mb-5'>
				Log in!
			</h1>
			<div>
				<LoginPanel />
			</div>
			<div>
				<h4>You don't have account? </h4>
				<Link
					
					href='./login/registerpanel'
				>
					Register!
				</Link>
			</div>
		</div>
	);
}
