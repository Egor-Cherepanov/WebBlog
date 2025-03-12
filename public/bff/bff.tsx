import { AuthResponse } from "../types"
import { getUser, addUser, createSession } from "./index"

export const server = {
  async authorize(
    authLogin: string,
    authPassword: string
  ): Promise<AuthResponse> {
    // const users = await getUsers()

    const user = await getUser(authLogin)

    if (!user) {
      return {
        error: "Такой пользователь не найден",
        res: null,
      }
    }

    if (authPassword !== user.password) {
      return {
        error: "Неверный пароль",
        res: null,
      }
    } else {
      return {
        error: null,
        res: createSession(user.role_id),
      }
    }
  },

  async register(regLogin: string, regPassword: string): Promise<AuthResponse> {
    // const users = await getUsers()

    const user = await getUser(regLogin)

    if (user) {
      return {
        error: "Такой логин уже существует",
        res: null,
      }
    }

    await addUser(regLogin, regPassword)

    return {
      error: null,
      res: createSession(2),
    }
  },
}
