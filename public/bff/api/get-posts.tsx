import { transformerPost } from "../transformers"

export const getPosts = async (page: number, limit: number) => {
  const res = await fetch(
    `http://localhost:3000/posts?_page=${page}&_limit=${limit}`
  )
  const data = await res.json()
  const total = res.headers.get("X-Total-Count")

  return {
    posts: data.map(transformerPost),
    total: Number(total),
  }
}
