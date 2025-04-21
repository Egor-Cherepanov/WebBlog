import { User } from "../../types"
import { transformerUser } from "../transformers"

export const getUsers = (): Promise<User[]> =>
  fetch("http://localhost:3000/users")
    .then((loadedUsers) => loadedUsers.json())
    .then((loadedUsers) => {
      return loadedUsers && loadedUsers.map(transformerUser)
    })
