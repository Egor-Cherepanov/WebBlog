import styled from "styled-components"
import { FC, ReactNode } from "react"
import { ContainerProps } from "../../../../../public/types"

interface TableRowProps extends ContainerProps {
  children: ReactNode
  border: boolean
}

const TableRowContainer: FC<TableRowProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
)

export const TableRow = styled(TableRowContainer)`
  display: flex;
  align-items: center;
  ${({ border }) => (border ? "border: 1px solid #000;" : "")}

  & > div {
    display: flex;
    padding: 0 10px;
  }

  & .login-column {
    width: 172px;
  }

  & .registered-at-column {
    width: 212px;
  }

  & .role-column {
    width: auto;
  }
`
