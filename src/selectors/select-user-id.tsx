import { User } from "../../public/types"

type RootState = {
  user: User
}
export const selectUserId = ({ user }: RootState) => user.id
