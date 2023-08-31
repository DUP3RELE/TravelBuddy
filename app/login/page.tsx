import LoginPanel from "./loginpanel/page";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function LogIn() {

	const session = await getServerSession(authOptions);
	
	if (session) redirect("../dashboard")
	return (
		<div className='text-center'>
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
