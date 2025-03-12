import { User } from "../types"

export const getUsers = (): Promise<User[]> =>
  fetch("http://localhost:3000/users").then((loadedUsers) => loadedUsers.json())
