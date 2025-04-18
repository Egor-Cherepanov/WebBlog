import { Error } from "../error/error"
import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { selectUserRole } from "../../selectors"
import { checkAccess } from "../../utils"
import { ERROR } from "../../../public/constants"

interface ContentProps {
  children: ReactNode
  error?: string | null
  access?: number[]
}

export const PrivateContent: React.FC<ContentProps> = ({
  children,
  error: serverError = null,
  access,
}) => {
  const userRole = useSelector(selectUserRole)

  const accessError = checkAccess(access || [], userRole)
    ? null
    : ERROR.ACCESS_DENIED
  const error = serverError || accessError

  return error ? <Error error={error} /> : children
}
