import { AuthResponse, User } from "../../types"
import { addUser, getUser } from "../api"
import { sessions } from "../sessions"

export const register = async (
  regLogin: string,
  regPassword: string
): Promise<AuthResponse> => {
  const existedUser = await getUser(regLogin)

  if (existedUser) {
    return {
      error: "Такой логин уже существует",
      res: null,
    }
  }

  const user: User = await addUser(regLogin, regPassword)
  const session = sessions.create(user)

  return {
    error: null,
    res: {
      session,
      id: user.id,
      login: user.login,
      role_id: user.role_id,
    },
  }
}
