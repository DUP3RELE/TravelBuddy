import Link from "next/link";

export default function RegistrationSuccess() {
	return (
		<>
			<div>
				<h1 className='text-center text-3xl font-bold tracking-tight sm:text-5xl mt-10'>
					Registration successful !!!
				</h1>
				<p className="text-center text-1xl tracking-tight sm:text-2xl mt-10">
					now You can{" "}
					<Link
						className='animation-one'
						href='/login'
					>
						log in
					</Link>
				</p>
			</div>
		</>
	);
}
