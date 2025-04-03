import { setUserRole } from "../api"
import { ROLE } from "../../constants"
import { sessions } from "../sessions"

export const updateUserRole = async (
  userSession: string,
  userId: string,
  newUserRoleId: number
) => {
  const accessRoles = [ROLE.ADMIN]

  if (!sessions.checkAccess(userSession, accessRoles)) {
    return {
      error: "Доступ запрещен",
      res: null,
    }
  }

  setUserRole(userId, newUserRoleId)

  return {
    error: null,
    res: true,
  }
}
