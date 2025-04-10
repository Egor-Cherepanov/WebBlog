import { User } from "../types"
import { getSession, deleteSession, addsession } from "./api"

export const sessions = {
  // list: {} as { [key: string]: User },

  create(user: User) {
    const hash = Math.random().toFixed(50)

    addsession(hash, user)

    // this.list[hash] = user

    return hash
  },

  async remove(hash: string) {
    const session = await getSession(hash)

    if (!session) return

    deleteSession(session.id)
    // delete this.list[hash]
  },

  async checkAccess(hash: string, accessRoles) {
    const dbSession = await getSession(hash)

    // debugger
    return !!dbSession.user && accessRoles.includes(dbSession.user.role_id)
  },
}
