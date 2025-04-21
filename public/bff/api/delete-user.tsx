export const deleteUser = async (userId: string): Promise<Response> =>
  await fetch(`http://localhost:3000/users/${userId}`, {
    method: "DELETE",
  })
