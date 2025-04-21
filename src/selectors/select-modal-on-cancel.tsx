import { AppState } from "../../public/types"

export const selectModalOnCancel = (state: { app: AppState }): (() => void) =>
  state.app.modal.onCancel
