// import { setPostData } from "./set-post-data"

export const removePostAsync = (requestServer, postToDeleteId: string) => () =>
  requestServer("removePost", postToDeleteId)

// export const removePostAsync =
// (requestServer, postToDeleteId: string) => (dispatch) => {
//   requestServer("removePost", postToDeleteId).then((postData) => {
//     dispatch(setPostData(postData.res))
//   })
// }
