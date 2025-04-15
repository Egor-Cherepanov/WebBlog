import { getPosts, getComments } from "../api"
import { getCommentsCount } from "../utils"

export const fetchPosts = async (page: number, limit: number) => {
  const [{ posts, total }, comments] = await Promise.all([
    getPosts(page, limit),
    getComments(""),
  ])

  return {
    error: null,
    res: posts.map((post) => ({
      ...post,
      comments_count: getCommentsCount(comments, post.id),
    })),
    total,
  }
}
