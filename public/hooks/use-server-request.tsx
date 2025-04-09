import { server } from "../bff"
import { useSelector } from "react-redux"
import { useCallback } from "react"
import { selectUserSession } from "../../src/selectors"

export const useServerRequest = () => {
  const session = useSelector(selectUserSession)

  return useCallback(
    (operation, ...params) => {
      if (typeof server[operation] !== "function") {
        console.error(`Operation "${operation}" is not defined in server.`)
        return Promise.reject(new Error(`Unknown operation: ${operation}`))
      }

      const request =
        ["register", "authorize", "fetchPost"].includes(operation) ||
        session == null
          ? params
          : [session, ...params]

      return server[operation](...request)
    },
    [session]
  )
}
