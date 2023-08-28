export default async function loginPanel() {
	// const handleSubmit = () => {};

	return (
		<div className="text-center justify-center">
			<form>
				<div className='m-2'>
					<label htmlFor='email' className="flex justify-center">Email:</label>
					<input
						className='inputStyle'
						type='email'
						id='email'
						name='email'
						required
					/>
				</div>
				<div className='m-2'>
					<label htmlFor='password' className="flex justify-center">Password:</label>
					<input
						className='inputStyle'
						type='password'
						id='password'
						name='password'
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
