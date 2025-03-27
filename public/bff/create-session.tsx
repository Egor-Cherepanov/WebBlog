import { Session, User } from "../types"
import { removeComment } from "./session"
import { ROLE } from "../constants"

export const addSession = (user: User): Session => {
  const session: Session = {
    logOut() {
      Object.keys(session).forEach((key) => delete session[key])
    },
  }

  switch (user.role_id) {
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
