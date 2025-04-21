import { PostState } from "../../public/types"
import { ACTION_TYPE } from "../actions"

type Action = { type: string; payload: PostState }

const initialPostState: PostState = {
  id: "",
  title: "",
  image_url: "",
  content: "",
  published_at: "",
  comments: [],
}

export const postReducer = (state = initialPostState, action: Action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_POST_DATA:
      return {
        ...state,
        ...action.payload,
      }

    case ACTION_TYPE.RESET_POST_DATA:
      return initialPostState
    default:
      return state
  }
}
