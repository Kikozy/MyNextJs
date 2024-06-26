"use client"
import { useContext } from "react"
import { AppContext } from "./components/AppContext"
import "./page.scss"
import Link from "next/link"

const navList = [
	{ name: "Index", path: "/index" },
	{ name: "About", path: "/about" },
	{ name: "Home", path: "/home" },
]

export default function Home() {
	console.log("page reload")
	const { state, dispatch } = useContext(AppContext)
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className={`nav ${state.display ? "" : "nav-hidden"}`}>
				<button
					className="nav-display"
					onClick={() =>
						dispatch({
							type: "UPDATE",
							filed: "display",
							value: !state.display,
						})
					}
				>
					{state.display ? "hidden" : "show"}
				</button>
				<div className="nav-list">
					{navList.map((item, index) => (
						<Link href={item.path} key={item.name}>
							{item.name + index}
						</Link>
					))}
				</div>
			</div>
			<h1>{state.navNmae ? state.navNmae : "Men! What can i say!"}</h1>
			<button
				onClick={() =>
					dispatch({
						type: "UPDATE",
						filed: "display",
						value: true,
					})
				}
			>
				点我一下咯
			</button>
		</main>
	)
}
