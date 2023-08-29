"use client";

// gnKnoB4e4HOGAoi2

import { useState } from "react";
import CountrySelector from "./getcountries";
import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export default function RegisterPanel() {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const registerUser = async (e) => {
		e.preventDefault();
		fetch("http://localhost:3000/api/register/", {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, username, password }),
		});
	};

	return (
		<div className='w-3/4 flex'>
			<h1 className='text-3xl font-bold tracking-tight sm:text-5xl m-5 sm:flex'>
				Create Your account:
			</h1>
			<form onSubmit={registerUser}>
				<div className='flex flex-col w-3/4'>
					<div className='m-2'>
						<label
							htmlFor='username'
							className=''
						>
							Username:
						</label>
						<input
							className='inputStyle'
							type='username'
							id='username'
							name='username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
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
							id='email'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
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
							id='password'
							name='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					{/* <div className='m-2'>
						<label
							htmlFor='confirmPassword'
							className=''
						>
							Confirm password:
						</label>
						<input
							className='inputStyle'
							type='confirmPassword'
							id='confirmPassword'
							name='confirmPassword'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</div> */}
				</div>
				<button
					type='submit'
					className='button-one'
				>
					Register
				</button>
				<div className='h-40'></div>
			</form>
		</div>
	);
}
