import Link from "next/link"


export default function registerButton() {
    return (
        <Link href='/login/registerpanel'>
			<button className='button-one'>Register</button>
		</Link>
    )
}