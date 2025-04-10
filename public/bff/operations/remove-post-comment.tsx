import { deleteComment, getComments, getPost } from "../api"
import { sessions } from "../sessions"
import { ROLE } from "../../constants"

export const removePostComment = async (
  userSession: string,
  commentToDeleteId: string,
  postId: string
) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR]
  // debugger
  const access = await sessions.checkAccess(userSession, accessRoles)

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    }
  }

  await deleteComment(commentToDeleteId)

  const post = await getPost(postId)

  const comments = await getComments(postId)

  return {
    error: null,
    res: { ...post, comments },
  }
}
