import styled from "styled-components"
import { H2, PrivateContent } from "../../components"
import { ContainerProps, Role, User } from "../../../public/types"
import { UserRow, TableHeader } from "./components"
import { useServerRequest } from "../../../public/hooks"
import { checkAccess } from "../../utils"
import { useEffect, useState } from "react"
import { ROLE } from "../../../public/constants"
import { useSelector } from "react-redux"
import { selectUserRole } from "../../selectors"

const UsersContainer: React.FC<ContainerProps> = ({ className }) => {
  const [roles, setRoles] = useState<Role[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [errorMessage, setErrorMessage] = useState("")
  const [shoudUpdateUserList, setShoudUpdateUserList] = useState(false)
  const userRole = useSelector(selectUserRole)
  const requestServer = useServerRequest()

  useEffect(() => {
    if (!checkAccess([ROLE.ADMIN], userRole)) {
      return
    }

    Promise.all([
      requestServer("fetchUsers"),
      requestServer("fetchRoles"),
    ]).then(([usersRes, rolesRes]) => {
      if (usersRes.error || rolesRes.error) {
        setErrorMessage(usersRes.error || rolesRes.error)
        return
      }

      setUsers(usersRes.res)
      setRoles(rolesRes.res)
    })
  }, [requestServer, shoudUpdateUserList, userRole])

  const onUsersRemove = (userId: string) => {
    if (!checkAccess([ROLE.ADMIN], userRole)) {
      return
    }
    requestServer("removeUser", userId).then(() => {
      setShoudUpdateUserList(!shoudUpdateUserList)
    })
  }

  return (
    <div className={className}>
      <PrivateContent access={[ROLE.ADMIN]} error={errorMessage}>
        <H2>Пользователи</H2>
        <div>
          <TableHeader />
          {Array.isArray(users) &&
            users.map(({ id, login, role_id: userRoleId, registered_at }) => (
              <UserRow
                key={id}
                id={id}
                login={login}
                userRoleId={userRoleId}
                registered_at={registered_at}
                roles={roles.filter(({ id: roleId }) => roleId != ROLE.GUEST)}
                onUsersRemove={() => onUsersRemove(id)}
              />
            ))}
        </div>
      </PrivateContent>
    </div>
  )
}

export const Users = styled(UsersContainer)`
  padding: 40px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 570px;
  font-size: 18px;
`
