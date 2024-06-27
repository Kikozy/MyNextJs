import { marked } from "marked"

async function getData(id: string) {
	const res = await fetch(
		`https://mock.presstime.cn/mock/667bd5d0025ec67cd8302d16/example/getDetail/${id}`
	)
	// await new Promise(resolve => setTimeout(resolve, 5000));
	return res
}

export default async function Detail({ params }: { params: { id: string } }) {
	const response = await (await getData(params.id)).json()
	const detailContent: string = response.data.content
	return (
		<>
			<div className="post-detail">
				<h1>详情内容哦</h1>
				<div
					dangerouslySetInnerHTML={{
						__html: await marked.parse(detailContent),
					}}
				></div>
			</div>
		</>
	)
}
