import { sessions } from "../sessions"
import { getUsers } from "../api"
import { ROLE } from "../../constants"

export const fetchUsers = async (userSession: string) => {
  const accessRoles = [ROLE.ADMIN]

  const access = await sessions.checkAccess(userSession, accessRoles)

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    }
  }

  const users = await getUsers()

  return {
    error: null,
    res: users,
  }
}
