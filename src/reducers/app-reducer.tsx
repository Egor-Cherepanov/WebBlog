import { ACTION_TYPE } from "../actions"
import { AppState, ModalState } from "../../public/types"

const initialAppState: AppState = {
  wasLogout: false,
  modal: {
    isOpen: false,
    text: "",
    onConfirm: () => {},
    onCancel: () => {},
  },
}

type Action = { type: string; payload: ModalState }

export const appReducer = (state = initialAppState, action: Action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGOUT:
      return {
        ...initialAppState,
        wasLogout: !state.wasLogout,
      }

    case ACTION_TYPE.OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...action.payload,
          isOpen: true,
        },
      }

    case ACTION_TYPE.CLOSE_MODAL:
      return initialAppState

    default:
      return state
  }
}
