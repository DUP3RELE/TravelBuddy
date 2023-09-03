"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPanel() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const res = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});
			
			if (res.error) {
				setError("Invalid Credentials");
			}
			router.replace("dashboard");
			setInterval(() => {
				window.location.reload(); // Przeładowanie strony co 1,5 sekundy
			}, 1500);
		} catch (error) {}
	};

	return (
		<div className='text-center justify-center'>
			<form
				onSubmit={handleLogin}
				autoComplete='true'
			>
				<div className='m-2'>
					<label
						htmlFor='email'
						className='flex justify-center'
					>
						Email:
					</label>
					<input
						className='inputStyle'
						type='email'
						placeholder='E-mail'
						onChange={(e) => setEmail(e.target.value)}
						autoComplete='email'
					/>
				</div>
				<div className='m-2'>
					<label
						htmlFor='password'
						className='flex justify-center'
					>
						Password:
					</label>
					<input
						className='inputStyle'
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
						autoComplete='current-password'
					/>
				</div>

				<button
					type='submit'
					className='button-one'
				>
					Log in
				</button>
				{error && (
					<div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 ml-20'>
						{error}
					</div>
				)}
			</form>
		</div>
	);
}
