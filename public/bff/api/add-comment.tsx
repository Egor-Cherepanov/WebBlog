import { generateDate } from "../utils"

export const addComment = async (
  postId: string,
  currentUserId: string,
  content: string
): Promise<Response> =>
  await fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      author_id: currentUserId,
      post_id: postId,
      published_at: generateDate(),
      content,
    }),
  })
