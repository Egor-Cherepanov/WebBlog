import { getUsers } from "./index"

export const getUser = async (loginToFind: string) => {
  const users = await getUsers()
  return users.find(({ login }) => loginToFind === login)
}
