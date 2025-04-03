import { sessions } from "../sessions"
import { getRoles } from "../api"
import { ROLE } from "../../constants"

export const fetchRoles = async (userSession: string) => {
  const accessRoles = [ROLE.ADMIN]

  if (!sessions.checkAccess(userSession, accessRoles)) {
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
