import { PostState, SavePostParams } from "../../types"
import { generateDate } from "../utils"

// export const addPost = async ({
//   image_url,
//   title,
//   content,
// }: AddPostParams): Promise<PostState> =>
//   await fetch("http://localhost:3000/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify({
//       image_url,
//       title,
//       content,
//       published_at: generateDate(),
//     })
//   })

export const addPost = async ({
  imageRef,
  titleRef,
  contentRef,
}: SavePostParams): Promise<PostState> => {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      image_url: imageRef,
      title: titleRef,
      content: contentRef,
      published_at: generateDate(),
    }),
  })

  const data: PostState = await response.json()
  return data
}
