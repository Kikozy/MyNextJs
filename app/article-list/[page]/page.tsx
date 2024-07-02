import Link from "next/link"
import { sleep, fetchEx } from "@/utils/index"
import "./about.scss"

async function getData() {
	// await sleep(10000)
	const res = await fetchEx(
		"https://mock.presstime.cn/mock/667bd5d0025ec67cd8302d16/example/getList"
	)
	console.log("data load!", res)
	return res.data
}

export default async function About({ params }: { params: { page: string } }) {
	console.log("看一下咯", params)
	const response = await getData()
	const list: Array<any> = response
	return (
		<>
			<div className="card-list">
				{list.map((item, index) => (
					<Link className="card-item" href={`/detail/${item.id}`} key={index}>
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
