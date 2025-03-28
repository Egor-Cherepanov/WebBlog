export const getUser = async (loginToFind: string) =>
  fetch(`http://localhost:3000/users?login=${loginToFind}`).then(
    async (loadedUser) => (await loadedUser.json())[0]
  )

// const users = await getUsers()
// return users.find(({ login }) => loginToFind === login)
// }
