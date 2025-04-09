import { deleteUser } from "../api"
import { ROLE } from "../../constants"
import { sessions } from "../sessions"

export const removeUser = async (userSession: string, userId: string) => {
  const accessRoles = [ROLE.ADMIN]

  const access = await sessions.checkAccess(userSession, accessRoles)

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    }
  }

  deleteUser(userId)

  return {
    error: null,
    res: true,
  }
}
