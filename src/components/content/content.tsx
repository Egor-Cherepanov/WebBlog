import styled from "styled-components"
import { H2 } from "../h2/h2"
import { ReactNode } from "react"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
interface ContentProps {
  children: ReactNode
  error?: string | null
}

export const Content: React.FC<ContentProps> = ({ children, error }) => {
  return error ? (
    <Div>
      <H2>Ошибка</H2>
      <div>{error}</div>
    </Div>
  ) : (
    children
  )
}
