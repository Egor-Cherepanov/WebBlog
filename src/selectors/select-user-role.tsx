import { User } from "../../public/types"

type RootState = {
  user: User
}

export const selectUserRole = ({ user }: RootState) => user.role_id
