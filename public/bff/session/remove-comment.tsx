export const removeComment = (): (() => void) => {
  return () => {
    console.log("Комментарий удален")
  }
}
