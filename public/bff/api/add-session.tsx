import { User } from "../../types"

export const addsession = async (hash: string, user: User) => {
  await fetch("http://localhost:3000/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      hash,
      user,
    }),
  })
}
