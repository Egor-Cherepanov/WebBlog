import { deleteComment, deletePost, getComments } from "../api"
import { sessions } from "../sessions"
import { ROLE } from "../../constants"

export const removePost = async (
  userSession: string,
  postToDeleteId: string
) => {
  const accessRoles = [ROLE.ADMIN]
  // debugger
  const access = await sessions.checkAccess(userSession, accessRoles)

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    }
  }

  await deletePost(postToDeleteId)

  const comments = await getComments(postToDeleteId)

  await Promise.all(comments.map(({ id }) => deleteComment(id)))

  // await deleteComment(commentToDeleteId)

  return {
    error: null,
    res: true,
  }
}
