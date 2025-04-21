import { User } from "../../public/types"
import { ACTION_TYPE } from "./index"

export const setUser = (user: User) => ({
  type: ACTION_TYPE.SET_USER,
  payload: user,
})
