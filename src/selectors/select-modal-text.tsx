import { AppState } from "../../public/types"

export const selectModalText = (state: { app: AppState }): string =>
  state.app.modal.text
