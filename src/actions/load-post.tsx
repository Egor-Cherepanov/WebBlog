import { setPostData } from "./set-post-data"

export const loadPost =
  (requestServer: any, postId: string) => async (dispatch: any) => {
    try {
      const postData = await requestServer("fetchPost", postId)

      // if (postData.error) {
      //   // console.log("Ошибка" + postData.error)
      //   return Promise.reject(postData.error)
      // }

      // if (postData.res) {
      // }
      dispatch(setPostData(postData.res))

      return postData
    } catch (error) {
      // console.log("Ошибка")
      return Promise.reject(error)
    }
  }
