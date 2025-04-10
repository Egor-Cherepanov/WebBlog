import { AppState } from "../../public/types"

export const selectModalOnConfirm = (state: { app: AppState }): (() => void) =>
  state.app.modal.onConfirm
