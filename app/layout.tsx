import Nav from "./nav";
import Footer from "./footer";
import "../css/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NoteComponent from "./notes-component/page";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "TravelBuddy",
	description: "Your travel buddy!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body>
				<main>
					<AuthProvider>
						<Nav />
						<div className='containter flex'>
							<div className='w-full lg:w-3/4 h-2'>{children}</div>
							<div className='w-1/4 hidden lg:flex'>
								<NoteComponent />
							</div>
						</div>
					</AuthProvider>
				</main>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
