"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPanel() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	const registerUser = async (e) => {
		e.preventDefault();

		if (!email || !name || !password) {
			setError("All fields are necessary.");
			return;
		}
		try {
			const resUserExist = await fetch("http://localhost:3000/api/userExist", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const { user } = await resUserExist.json();

			if (user) {
				setError("User already exist!");
				return;
			}

			const res = await fetch("api/register/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, name, password }),
			});
			if (res.ok) {
				const form = e.target;
				form.reset();
				router.push("registerpanel/registrationsuccess")
			} else {
				console.log("user registration failed");
			}
		} catch (error) {
			console.log("error durning registration", error);
		}
	};

	

	return (
		<div className='w-3/4 flex'>
			<h1 className='text-3xl font-bold tracking-tight sm:text-5xl m-5 sm:flex'>
				Create Your account:
			</h1>
			<form onSubmit={registerUser} autoComplete="true">
				<div className='flex flex-col w-3/4'>
					<div className='m-2'>
						<label
							htmlFor='name'
							className=''
						>
							Username:
						</label>
						<input
							className='inputStyle'
							type='name'
							placeholder='Your nickname'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='m-2'>
						<label
							htmlFor='email'
							className=''
						>
							Email:
						</label>
						<input
							className='inputStyle'
							type='email'
							placeholder='Your E-mail'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='m-2'>
						<label
							htmlFor='password'
							className=''
						>
							Password:
						</label>
						<input
							className='inputStyle'
							type='password'
							placeholder='Your password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<button
					type='submit'
					className='button-one'
				>
					Register
				</button>
				{error && (
					<div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 ml-20'>
						{error}
					</div>
				)}
				<div className='h-40'></div>
			</form>
		</div>
	);
}
