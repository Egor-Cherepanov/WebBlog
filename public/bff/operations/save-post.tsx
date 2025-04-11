import { updatePost } from "../api"
import { ROLE } from "../../constants"
import { sessions } from "../sessions"
import { SavePostParams } from "../../types"

export const savePost = async (
  userSession: string,
  newPostData: SavePostParams
) => {
  const accessRoles = [ROLE.ADMIN]

  const access = await sessions.checkAccess(userSession, accessRoles)

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    }
  }

  const updatePostJSON = await updatePost(newPostData)
  const updatedPost = await updatePostJSON.json()

  return {
    error: null,
    res: updatedPost,
  }
}
