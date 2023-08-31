import Link from "next/link"


export default function LogRegButtons() {
    return (
        <div className=' items-center mr-5'>
					<Link
						className='m-1 animation-one'
						href='/login'
					>
						Log in /
					</Link>
					<Link
						className='animation-one'
						href='/login/registerpanel'
					>
						Register
					</Link>
				</div>
    )
}