"use client"
import { useContext } from "react"
import { AppContext } from "../AppContext"
import Link from "next/link"
import "./globalHeader.scss"
const navList = [
	{ name: "主页", path: "/index" },
	{ name: "关于", path: "/article-list/1" },
	{ name: "文章", path: "/home" },
]
function GlobalHeader() {
	const globalContext = useContext(AppContext)
	const { globalState, dispatchGlobalState } = globalContext

	return (
		<div className="globalHeader">
			<div className="nav-list">
				{navList.map((navItem) => (
					<Link className="nav-item" href={navItem.path} key={navItem.name}>
						{navItem.name}
					</Link>
				))}
			</div>
		</div>
	)
}
export default GlobalHeader
