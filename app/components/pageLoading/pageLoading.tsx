"use client"
import Image from "next/image"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ReactNode, useContext, useEffect, useState } from "react"
import { AppContext } from "../AppContext"

export default function PageLoading({ children }: { children: ReactNode }) {
	const pathName = useSearchParams()
	const searchParams = useSearchParams()
	const globalContext = useContext(AppContext)
	const { globalState, dispatchGlobalState } = globalContext
	useEffect(() => {
		dispatchGlobalState({ type: "UPDATE", filed: "pageLoading", value: false })
		console.log("页面载入完毕", globalState)
	}, [pathName, searchParams])

	return (
		<>
			<Image
				className="page-loadingImg"
				src="/page_loading.gif"
				height={300}
				width={300}
				alt="Loading"
				style={{ display: globalState.pageLoading ? "block" : "none" }}
			/>
			{children}
		</>
	)
}
