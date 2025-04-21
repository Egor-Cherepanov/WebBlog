import { sessions } from "../sessions"

export const logout = async (userSession: string) => {
  sessions.remove(userSession)
}
