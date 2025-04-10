import { AppState } from "../../public/types"

export const selectModalIsOpen = (state: { app: AppState }): boolean =>
  state.app.modal.isOpen
