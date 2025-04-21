import { updatePost, addPost } from "../api"
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

  const savedPost =
    newPostData.id === ""
      ? await addPost(newPostData)
      : await updatePost(newPostData)
  // const savedPost = await savedPostJSON.json()

  return {
    error: null,
    res: savedPost,
  }
}
