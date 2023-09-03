import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export async function Reload() {
	const session = await getServerSession(authOptions);

	const reloadPage = () => {
		if (session) {
			setInterval(() => {
				window.location.reload(); // Przeładowanie strony co 3 sekundy
			}, 10000);
		} else {
			console.log("hello");
		}
	};
}
