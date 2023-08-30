"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function loginPanel() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginMessage, setLoginMessage] = useState("");

	const router = useRouter();

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:3000/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			if (response.status === 200) {
				// Logowanie było udane
				const data = await response.json();
				setLoginMessage(data.message);

				// Tutaj możesz wykonać dodatkowe działania po zalogowaniu
			} else {
				// Logowanie nie było udane
				const data = await response.json();
				setLoginMessage(data.message);
			}
		} catch (error) {
			console.error("Błąd logowania:", error);
		}
	};

	return (
		<div className='text-center justify-center'>
			<form
				onSubmit={handleLogin}
				method='POST'
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
						className='flex justify-center'
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

				<button
					type='submit'
					className='button-one'
				>
					Log in
				</button>
			</form>
		</div>
	);
}
