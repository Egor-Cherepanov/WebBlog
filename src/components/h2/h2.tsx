import styled from "styled-components"
import { ReactNode } from "react"

interface H2Props {
  children: ReactNode
  className?: string
}

const H2Container = ({ children, className }: H2Props) => {
  return <h2 className={className}>{children}</h2>
}

export const H2 = styled(H2Container)`
  margin: 30px 0;
`
