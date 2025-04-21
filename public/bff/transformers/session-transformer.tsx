import { SessionState } from "../../types"

export const transformerSession = (dbSession: SessionState) => ({
  id: dbSession.id,
  hash: dbSession.hash,
  user: dbSession.user,
})
