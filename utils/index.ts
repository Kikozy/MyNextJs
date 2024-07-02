export async function sleep(time: number): Promise<string> {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res("sleep end,use time: " + time)
		}, time)
	})
}

export async function fetchEx(url: string) {
	try {
		let response = await fetch(url)
		return await response.json()
	} catch (error) {
		console.error("请求错误: ", error)
	}
}
