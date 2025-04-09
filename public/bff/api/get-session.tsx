import { transformerSession } from "../transformers"

export const getSession = async (hash: string) =>
  fetch(`http://localhost:3000/sessions?hash=${hash}`)
    .then(async (loadedSession) => await loadedSession.json())
    .then(([loadedSession]) => {
      return loadedSession && transformerSession(loadedSession)
    })
