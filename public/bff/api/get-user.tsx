import { transformerUser } from "../transformers"

export const getUser = async (loginToFind: string) =>
  fetch(`http://localhost:3000/users?login=${loginToFind}`)
    .then(async (loadedUser) => await loadedUser.json())
    .then(([loadedUser]) => {
      return loadedUser && transformerUser(loadedUser)
    })
