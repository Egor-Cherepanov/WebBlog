import { ContainerProps } from "../../../public/types"
import { Logo, ControlPanel } from "./components"
import styled from "styled-components"

const Discription = styled.div`
  font-style: italic;
  font-weight: 400;
`

const HeaderContainer: React.FC<ContainerProps> = ({ className }) => {
  return (
    <header className={className}>
      <Logo />
      <Discription>
        Веб-технологии
        <br />
        Написание кода
        <br />
        Разбор ошибок
      </Discription>
      <ControlPanel />
    </header>
  )
}

export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  background-color: #fff;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  box-shadow: 0px -2px 12px #000;
  z-index: 20;
`
