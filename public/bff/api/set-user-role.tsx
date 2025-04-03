export const setUserRole = async (
  userId: string,
  roleId: number
): Promise<Response> =>
  await fetch(`http://localhost:3000/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      role_id: roleId,
    }),
  })
