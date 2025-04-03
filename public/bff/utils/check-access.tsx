import { sessions } from "../sessions"

export const checkAccess = (userSession: string, accessRoles) => {
  const user = sessions.list[userSession]

  return !!user && accessRoles.includes(user.role_id)
}
