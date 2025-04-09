import { setPostData } from "./set-post-data"

export const addComment =
  (requestServer, postId: string, currentUserId: string, content: string) =>
  (dispatch) => {
    requestServer("addPostComment", postId, currentUserId, content).then(
      (postData) => {
        dispatch(setPostData(postData.res))
      }
    )
  }
