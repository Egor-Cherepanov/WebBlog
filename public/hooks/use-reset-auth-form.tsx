import { useEffect } from "react"
import { useStore } from "react-redux"
import { RootState } from "../../src/store"

export const useResetForm = (reset: () => void): void => {
  const store = useStore()
  useEffect(() => {
    let currentWasLogout: boolean = (store.getState() as RootState).app
      .wasLogout

    const unsubscribe: () => void = store.subscribe(() => {
      const prevWasLogout: boolean = currentWasLogout
      currentWasLogout = (store.getState() as RootState).app.wasLogout

      if (currentWasLogout !== prevWasLogout) {
        reset()
      }
    })

    return unsubscribe
  }, [store, reset])
}
