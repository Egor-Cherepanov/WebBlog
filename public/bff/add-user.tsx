import { generateDate } from "./index"

export const addUser = async (
  regLogin: string,
  regPassword: string
): Promise<Response> =>
  await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      login: regLogin,
      password: regPassword,
      registered_at: generateDate(),
      role_id: 2,
    }),
  }).then((newUserData) => newUserData.json())
