import { ROLE } from "../../public/constants"
import { User } from "../../public/types"
import { ACTION_TYPE } from "../actions"

const initialUserState = {
  session: null,
  id: null,
  login: null,
  role_id: ROLE.GUEST,
}

type Action = { type: string; payload: User }

export const userReducer = (state = initialUserState, action: Action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case ACTION_TYPE.LOGOUT: {
      return initialUserState
    }
    default:
      return state
  }
}
