import { addComment, getComments, getPost, getUsers } from "../api"
import { sessions } from "../sessions"
import { ROLE } from "../../constants"

export const addPostComment = async (
  userSession: string,
  postId: string,
  currentUserId: string,
  content: string
) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER]

  const access = await sessions.checkAccess(userSession, accessRoles)

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    }
  }

  await addComment(postId, currentUserId, content)

  const post = await getPost(postId)

  const comments = await getComments(postId)

  const users = await getUsers()

  const commentsWithAuthor = comments.map((comment) => {
    const user = users.find(({ id }) => id === comment.author_id)

    return {
      ...comment,
      author: user?.login,
    }
  })

  return {
    error: null,
    res: { ...post, comments: commentsWithAuthor },
  }
}
