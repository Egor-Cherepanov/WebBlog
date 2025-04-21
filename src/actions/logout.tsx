import { ACTION_TYPE } from "./action-type"
import { server } from "../../public/bff"

export const logout = (session: string) => {
  server.logout(session)

  return {
    type: ACTION_TYPE.LOGOUT,
  }
}
