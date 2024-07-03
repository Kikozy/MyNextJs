import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import "./globals.scss"
import { AppContextProvider } from "./components/AppContext"
import GlobalHeader from "./components/globalHeader/globalHeader"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="zh">
			<body>
				<Image
					className="loading-img"
					src="/loading.gif"
					height={300}
					width={300}
					alt=""
				/>
				<AppContextProvider>
					<GlobalHeader />
					<div className="globalContent">
						<div className="content-core">{children}</div>
					</div>
				</AppContextProvider>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              window.addEventListener('load',()=>{
                document.querySelector('.loading-img')?.setAttribute('hidden',true)
              })
            `,
					}}
				></script>
			</body>
		</html>
	)
}
