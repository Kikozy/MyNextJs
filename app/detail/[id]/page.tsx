import { marked } from "marked"
import { sleep, fetchEx } from "@/utils/index"
async function getData(id: string) {
	const res = await fetch(
		`https://mock.presstime.cn/mock/667bd5d0025ec67cd8302d16/example/getDetail/${id}`
	)
	// await new Promise(resolve => setTimeout(resolve, 5000));
	return res
}

export default async function Detail({ params }: { params: { id: string } }) {
	console.log("如果进来了就好了")
	await sleep(5000)
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
