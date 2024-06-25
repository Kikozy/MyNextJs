export type State = {
  navNmae: string,
  themeMode: "dark" | "light",
  display: boolean
}
export enum ActionType { //枚举？
  UPDATE = "UPDATE"
}

type UpdateAction = {
  type: string
  filed: string
  value: any
}

export type Action = UpdateAction

export const initState: State = {
  navNmae: "不知道的标题",
  themeMode: "dark",
  display: true
}

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "UPDATE":
      return { ...state, [action.filed]: action.value }
      break
    default: throw new Error()
      break
  }
}