import { User } from "../../public/types"

type RootState = {
  user: User
}
export const selectUserSession = ({ user }: RootState) => user.session
