import { AuthResponse, User } from "../../types"
import { getUser } from "../api"
import { sessions } from "../sessions"

export const authorize = async (
  authLogin: string,
  authPassword: string
): Promise<AuthResponse> => {
  const user: User = await getUser(authLogin)

  if (!user) {
    return {
      error: "Такой пользователь не найден",
      res: null,
    }
  }

  const { id, password, login, role_id } = user

  if (authPassword !== password) {
    return {
      error: "Неверный пароль",
      res: null,
    }
  }

  const session = sessions.create(user)
  console.log(String(session))

  return {
    error: null,
    res: {
      session,
      id,
      password,
      login,
      role_id,
    },
  }
}
