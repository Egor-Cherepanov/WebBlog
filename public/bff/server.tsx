import { AuthResponse } from "../types"
import { sessions } from "./sessions"
import { getUser, addUser } from "./index"

export const server = {
  async logout(session: string) {
    sessions.remove(session)
  },

  async authorize(
    authLogin: string,
    authPassword: string
  ): Promise<AuthResponse> {
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
    }

    return {
      error: null,
      res: {
        session: sessions.create(user),
        id: user.id,
        login: user.login,
        roleId: user.role_id,
      },
    }
  },

  async register(regLogin: string, regPassword: string): Promise<AuthResponse> {
    const user = await getUser(regLogin)

    if (user) {
      return {
        error: "Такой логин уже существует",
        res: null,
      }
    }

    const newUser = await addUser(regLogin, regPassword)

    return {
      error: null,
      res: {
        session: sessions.create(newUser),
        id: newUser.id,
        login: newUser.login,
        roleId: newUser.role_id,
      },
    }
  },
}
