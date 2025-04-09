import { PostState } from "../../types"

export const transformerPost = (dbPost: PostState) => ({
  id: dbPost.id,
  title: dbPost.title,
  image_url: dbPost.image_url,
  content: dbPost.content,
  published_at: dbPost.published_at,
})
