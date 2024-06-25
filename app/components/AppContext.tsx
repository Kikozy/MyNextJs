"use client"

import { reducer, initState, Action, State } from "@/reducers/AppReducer"
import { Dispatch, SetStateAction, createContext, useMemo, useState, ReactNode, useReducer } from "react"

type AppContextProps = {
  state: State,
  dispatch: Dispatch<Action>
}



export const AppContext = createContext<AppContextProps>(null!)

export function AppContextProvider({ children }: { children: ReactNode }) {
  console.log('AppContextProvider reload')

  const [state, dispatch] = useReducer(reducer, initState)
  const contextValue = useMemo(() => {
    console.log('state发生变化: ', state)
    return { state, dispatch }
  }, [state, dispatch])
  return <AppContext.Provider value={contextValue}>
    {children}
  </AppContext.Provider>
}