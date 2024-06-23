"use client"

import { Dispatch, SetStateAction, createContext, useMemo, useState, ReactNode } from "react"

type State = {
  navigate: boolean,
  title: string
}

type AppContextProps = {
  value: State,
  setValue: Dispatch<SetStateAction<State>>
}

export const AppContext = createContext<AppContextProps>(null!)

export function AppContextProvider({ children }: { children: ReactNode }) {
  console.log('AppContextProvider reload')
  const [btnName, setBtnName] = useState("点我")
  const [value, setValue] = useState<State>({ navigate: true, title: '未知' })
  const contextValue = useMemo(() => {
    console.log('value发生变化: ', value)
    return { value, setValue }
  }, [value, setValue])
  return <AppContext.Provider value={contextValue}>
    <button onClick={() => setBtnName(btnName + new Date().getTime())}>{btnName}</button>
    {children}
  </AppContext.Provider>
}

