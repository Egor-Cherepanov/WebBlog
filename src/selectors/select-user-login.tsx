import { User } from "../../public/types"

type RootState = {
  user: User
}
export const selectUserLogin = ({ user }: RootState) => user.login
