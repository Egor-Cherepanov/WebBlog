import { ROLE } from "../../../../../public/constants"
import { useSelector, useDispatch } from "react-redux"
import {
  selectUserRole,
  selectUserLogin,
  selectUserSession,
} from "../../../../../src/selectors"
import { ContainerProps } from "../../../../../public/types"
import { Icon, Button } from "../../../../components"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../../../../actions"
import styled from "styled-components"

const RightAligned = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const StyledLogoutIcon = styled.div`
  font-size: 24px
  margin: 0 0 0px 10px;
  cursor: pointer;
`

const ControlPanelContainer: React.FC<ContainerProps> = ({ className }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const roleId = useSelector(selectUserRole)
  const login = useSelector(selectUserLogin)
  const session = useSelector(selectUserSession)

  return (
    <div className={className}>
      <RightAligned>
        {roleId === ROLE.GUEST ? (
          <Button as={Link} to="/login">
            Войти
          </Button>
        ) : (
          <>
            <UserName>{login}</UserName>
            <StyledLogoutIcon onClick={() => dispatch(logout(session))}>
              <Icon id="fa-sign-out" margin="0 0 0 10px" />
            </StyledLogoutIcon>
            {/* <StyledLogoutIcon
              className="fa fa-sign-out"
              // margin="0 0 10px 10px"
              onClick={() => dispatch(logout(session))}
            /> */}
          </>
        )}
      </RightAligned>
      <RightAligned>
        <Icon
          id="fa-backward"
          margin="10px 0 0 0"
          onClick={() => navigate(-1)}
        />
        <Link to="/post">
          <Icon id="fa-file-text-o" margin="10px 0 0 16px" />
        </Link>
        <Link to="/users">
          <Icon id="fa-users" margin="10px 0 0 16px" />
        </Link>
      </RightAligned>
    </div>
  )
}

export const ControlPanel = styled(ControlPanelContainer)``
