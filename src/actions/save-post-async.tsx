import { SavePostParams } from "../../public/types"
import { setPostData } from "./set-post-data"
import { Dispatch } from "redux"

export const savePostAsync =
  (requestServer, newPostData: SavePostParams) =>
  async (dispatch: Dispatch) => {
    const response = await requestServer("savePost", newPostData)
    dispatch(setPostData(response.res))
    return response.res
  }
