import { setPostData } from "./set-post-data"

export const removeComment =
  (requestServer, commentToDeleteId: string, postId: string) => (dispatch) => {
    requestServer("removePostComment", commentToDeleteId, postId).then(
      (postData) => {
        dispatch(setPostData(postData.res))
      }
    )
  }
