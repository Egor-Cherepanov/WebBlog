import { User } from "../types"

export const sessions = {
  list: {} as { [key: string]: User },

  create(user: User) {
    const hash = Math.random().toFixed(50)

    this.list[hash] = user

    return hash
  },

  remove(hash: string) {
    delete this.list[hash]
  },

  checkAccess(hash: string, accessRoles) {
    const user = this.list[hash]

    return !!user && accessRoles.includes(user.role_id)
  },
}
