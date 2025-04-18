import { User } from "../types"
import { getSession, deleteSession, addsession } from "./api"

export const sessions = {
  create(user: User) {
    const hash = Math.random().toFixed(50)

    addsession(hash, user)

    return hash
  },

  async remove(hash: string) {
    const session = await getSession(hash)

    if (!session) return

    deleteSession(session.id)
  },

  async checkAccess(hash: string, accessRoles) {
    const dbSession = await getSession(hash)

    return !!dbSession?.user && accessRoles.includes(dbSession.user.role_id)
  },
}
