import { useForm } from "react-hook-form"
import { authFormSchema } from "../../../public/FormSchems"
import { yupResolver } from "@hookform/resolvers/yup"
import { server } from "../../../public/bff"
import { useState } from "react"
import { selectUserRole } from "../../selectors"
import { useDispatch, useSelector } from "react-redux"
import { ContainerProps, AuthFormData, User } from "../../../public/types"
import { Input, Button, H2, ErrorMessage } from "../../components"
import styled from "styled-components"
import { Link, Navigate } from "react-router-dom"
import { setUser } from "../../actions"
import { useResetForm } from "../../../public/hooks"
import { ROLE } from "../../../public/constants"

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: underline;
  margin: 20px 0;
  font-size: 18px;
`

const AuthorizationContainer: React.FC<ContainerProps> = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authFormSchema),
  })

  const [serverError, setServerError] = useState<string>("")
  const roleId = useSelector(selectUserRole)
  const dispatch = useDispatch()

  useResetForm(reset)

  const onSubmit = (data: AuthFormData) => {
    const { login, password } = data
    server.authorize(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса ${error}`)
        return
      }

      if (res) {
        const user: User = {
          id: res.id,
          login: res.login,
          password: res.password,
          registered_at: new Date().toISOString(),
          role_id: res.role_id,
          session: res.session,
        }
        dispatch(setUser(user))
      }
    })
  }

  const formError = errors?.login?.message || errors?.password?.message
  const errorMessage = formError || serverError

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />
  }

  return (
    <div className={className}>
      <H2>Авторизация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин..."
          {...register("login", {
            onChange: () => setServerError(""),
          })}
        />
        <Input
          type="password"
          placeholder="Пароль..."
          {...register("password", {
            onChange: () => setServerError(""),
          })}
        />
        <Button type="submit" disabled={!!formError}>
          Авторизоваться
        </Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <StyledLink to="/register">Регистрация</StyledLink>
      </form>
    </div>
  )
}

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > form {
    display: flex;
    flex-direction: column;
    width: 260px;
  }
`
