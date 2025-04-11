import { SavePostParams } from "../../public/types"
import { setPostData } from "./set-post-data"

export const savePost =
  (requestServer, newPostData: SavePostParams) => (dispatch) => {
    requestServer("savePost", newPostData).then((postData) => {
      dispatch(setPostData(postData.res))
    })
  }
