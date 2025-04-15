import { getPosts, getComments } from "../api"
import { getCommentsCount } from "../utils"

export const fetchPosts = async () => {
  const [posts, comments] = await Promise.all([getPosts(), getComments("")])

  return {
    error: null,
    res: posts.map((post) => ({
      ...post,
      comments_count: getCommentsCount(comments, post.id),
    })),
  }
}
