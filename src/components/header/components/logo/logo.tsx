import { ContainerProps } from "../../../../../public/types"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Icon } from "../../../index"

const LargeText = styled.div`
  font-size: 48px;
  font-weight: 600;
  line-height: 48px;
  margin-top: 17px;
`
const SmallText = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const LogoContainer: React.FC<ContainerProps> = ({ className }) => (
  <Link className={className} to="/">
    <Icon size="70px" margin="0 10px 0 0" id="fa-code" />
    <div>
      <LargeText>Блог</LargeText>
      <SmallText>веб-разработчика</SmallText>
    </div>
  </Link>
)

export const Logo = styled(LogoContainer)`
  display: flex;
  margin-top: -20px;
`
