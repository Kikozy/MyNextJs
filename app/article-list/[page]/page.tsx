"use client"
import Link from "next/link"
import { sleep, fetchEx } from "@/utils/index"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "@/app/components/AppContext"
import "./about.scss"
import { usePathname, useSearchParams } from "next/navigation"

async function getData() {
	const res = await fetchEx(
		"https://mock.presstime.cn/mock/667bd5d0025ec67cd8302d16/example/getList"
	)
	console.log("data load!", res)
	return res.data
}

export default function About({ params }: { params: { page: string } }) {
	const globalContext = useContext(AppContext)
	const { globalState, dispatchGlobalState } = globalContext
	// const pathName = usePathname()
	// const searchParams = useSearchParams()
	function handleClickTpBtn() {
		dispatchGlobalState({ type: "UPDATE", filed: "pageLoading", value: true })
	}
	const [list, setList] = useState<any[]>([])

	useEffect(() => {
		;(async () => {
			const response = await getData()
			setList(response)
		})()
	}, [])
	return (
		<>
			<div className="card-list">
				{list.map((item, index) => (
					<Link
						className="card-item"
						href={`/detail/${item.id}`}
						key={index}
						onClick={handleClickTpBtn}
					>
						<p className="title">{item.title}</p>
						<p className="author">{item.author}</p>
						<p className="time">{item.time}</p>
						<div className="content">{item.content}</div>
					</Link>
				))}
			</div>
		</>
	)
}
