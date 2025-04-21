import styled from "styled-components"
import { UserRowProps } from "../../../../../public/types"
import { Icon } from "../../../../components"
import { useServerRequest } from "../../../../../public/hooks"
import { TableRow } from "../table-row/table-row"
import { useState, ChangeEvent } from "react"

const UserRowContainer: React.FC<UserRowProps> = ({
  className,
  id,
  login,
  registered_at,
  userRoleId,
  roles,
  onUsersRemove,
}) => {
  const [initialRoleId, setInitialRoleId] = useState(userRoleId)
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId)
  const isSaveButtonDisabled = selectedRoleId === initialRoleId
  const requestServer = useServerRequest()

  const onRoleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoleId(Number(target.value))
  }

  const onUserRoleSave = (userId: string, newUserRoleId: number) => {
    requestServer("updateUserRole", userId, newUserRoleId).then(() => {
      setInitialRoleId(newUserRoleId)
    })
  }

  return (
    <div className={className}>
      <TableRow border={true}>
        <div className="login-column">{login}</div>

        <div className="registered-at-column">{registered_at}</div>

        <div className="role-column">
          <select value={selectedRoleId} onChange={onRoleChange}>
            {Array.isArray(roles) &&
              roles.map(({ id: roleId, name: roleName }) => (
                <option key={roleId} value={roleId}>
                  {roleName}
                </option>
              ))}
          </select>
        </div>
        <Icon
          id="fa-floppy-o"
          margin="0 0 0 10px"
          disabled={isSaveButtonDisabled}
          onClick={() => onUserRoleSave(id, selectedRoleId)}
        />
      </TableRow>
      <Icon id="fa-trash-o" margin="0 0 0 10px" onClick={onUsersRemove} />
    </div>
  )
}

export const UserRow = styled(UserRowContainer)`
  display: flex;
  margin-top: 10px;

  & select {
    font-size: 16px;
    padding: 0 5px;
  }
`
