import { User } from "../../public/types"
import { ACTION_TYPE } from "../actions"

const initialAppState = {
  wasLogout: false,
}

type Action = { type: string; payload: User }

export const appReducer = (state = initialAppState, action: Action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGOUT:
      return {
        ...initialAppState,
        wasLogout: !state.wasLogout,
      }
    default:
      return state
  }
}
