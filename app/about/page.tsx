import Link from "next/link"
import "./about.scss"

async function getData() {
	const res = await fetch(
		"https://mock.presstime.cn/mock/667bd5d0025ec67cd8302d16/example/getList"
	)
	return res
}

export default async function About() {
	const response = await (await getData()).json()
	const list: Array<any> = response.data
	return (
		<>
			<h1>About</h1>
			<div className="card-list">
				{list.map((item, index) => (
					<Link className="card-item" href={`/detail/${item.id}`}>
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
