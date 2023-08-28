// import { useState } from "react";

export default async function registerPanel() {
	// const Register = () => {
	// 	const [formData, setFormData] = useState({
	// 		email: "",
	// 		password: "",
	// 	});

	// 	const handleChange = (e) => {
	// 		const { name, value } = e.target;
	// 		setFormData({ ...formData, [name]: value });
	// 	};

	// 	const handleSubmit = (e) => {
	// 		e.preventDefault();
	// 		// Obsługa rejestracji, np. wysłanie danych na serwer
	// 	};
	return (
		<div className='text-center justify-center'>
			<h1 className='text-4xl font-bold tracking-tight sm:text-6xl mb-5'>
				Create Your account:
			</h1>
			<form>
				<div className='flex'>
					<div className='w-1/2 lg:w-full'>
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
								required
							/>
						</div>
                        
					</div>
					<div className='w-1/2 lg:w-full'>
						<div className='m-2'>
							<label
								htmlFor='email'
								className='flex justify-center'
							>
								Country:
							</label>
							<input
								className='inputStyle'
								type='country'
								id='country'
								name='country'
								required
							/>
						</div>
						<div className='m-2'>
							<label
								htmlFor='password'
								className='flex justify-center'
							>
								City:
							</label>
							<input
								className='inputStyle'
								type='city'
								id='city'
								name='city'
								required
							/>
						</div>
					</div>
				</div>
				<button
					type='submit'
					className='button-one'
				>
					Register
				</button>
			</form>
		</div>
	);
}
