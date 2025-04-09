import { ACTION_TYPE } from "./action-type"
import { PostState } from "../../public/types"

export const setPostData = (postData: PostState) => ({
  type: ACTION_TYPE.SET_POST_DATA,
  payload: postData,
})
