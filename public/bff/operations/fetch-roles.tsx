import { sessions } from "../sessions"
import { getRoles } from "../api"
import { ROLE } from "../../constants"

export const fetchRoles = async (userSession: string) => {
  const accessRoles = [ROLE.ADMIN]

  const access = await sessions.checkAccess(userSession, accessRoles)

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    }
  }

  const roles = await getRoles()

  return {
    error: null,
    res: roles,
  }
}
