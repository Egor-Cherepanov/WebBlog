// import styled from "styled-components"
import { ContainerProps } from "../../../../public/types"
import { TableRow } from "./table-row/table-row"

export const TableHeader: React.FC<ContainerProps> = () => {
  return (
    <TableRow>
      <div className="login-column">Логин</div>
      <div className="registered-at-column">Дата регистрации</div>
      <div className="role-column">Роль</div>
    </TableRow>
  )
}
