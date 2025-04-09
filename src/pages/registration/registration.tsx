import { useForm } from "react-hook-form"
import { registerFormSchema } from "../../../public/FormSchems"
import { yupResolver } from "@hookform/resolvers/yup"
import { server } from "../../../public/bff"
import { useState } from "react"
import { selectUserRole } from "../../selectors"
import { useDispatch, useSelector } from "react-redux"
import { ContainerProps, RegisterFormData, User } from "../../../public/types"
import { Input, Button, H2, ErrorMessage } from "../../components"
import styled from "styled-components"
import { Navigate } from "react-router-dom"
import { setUser } from "../../actions"
import { useResetForm } from "../../../public/hooks"

import { ROLE } from "../../../public/constants"

const RegistrationContainer: React.FC<ContainerProps> = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
      login: "",
      password: "",
      passcheck: "",
    },
    resolver: yupResolver(registerFormSchema),
  })

  const [serverError, setServerError] = useState<string>("")
  const roleId = useSelector(selectUserRole)
  const dispatch = useDispatch()

  useResetForm(reset)

  const onSubmit = (data: RegisterFormData) => {
    const { login, password } = data
    server.register(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса ${error}`)
        return
      }

      if (res) {
        const user: User = {
          id: res.id,
          login: res.login,
          password: "",
          registered_at: new Date().toISOString(),
          role_id: res.roleId,
        }
        dispatch(setUser(user))
        sessionStorage.setItem("userData", JSON.stringify(user))
      }
    })
  }

  const formError =
    errors?.login?.message ||
    errors?.password?.message ||
    errors?.passcheck?.message
  const errorMessage = formError || serverError

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />
  }

  return (
    <div className={className}>
      <H2>Регистрация</H2>
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
        <Input
          type="password"
          placeholder="Проверка пароля..."
          {...register("passcheck", {
            onChange: () => setServerError(""),
          })}
        />
        <Button type="submit" disabled={!!formError}>
          Авторизоваться
        </Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </form>
    </div>
  )
}

export const Registration = styled(RegistrationContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > form {
    display: flex;
    flex-direction: column;
    width: 260px;
  }
`
