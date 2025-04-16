export const debounce = (callBack, delay = 2000) => {
  let timeout
  return (...arg) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callBack(...arg)
    }, delay)
  }
}
