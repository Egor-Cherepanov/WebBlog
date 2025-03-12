import { Session } from "../types"
import { removeComment } from "./session"
import { ROLE } from "../constants"

export const createSession = (roleId: number): Session => {
  const session: Session = {
    logOut() {
      Object.keys(session).forEach((key) => delete session[key])
    },
  }

  switch (roleId) {
    case ROLE.ADMIN: {
      session.removeComment = removeComment
      break
    }
    case ROLE.MODERATOR: {
      session.removeComment = removeComment
      break
    }
    case ROLE.READER: {
      break
    }
    case ROLE.GUEST: {
      break
    }
  }

  return session
}
