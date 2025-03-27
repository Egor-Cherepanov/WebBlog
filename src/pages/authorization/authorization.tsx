import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { server } from "../../../public/bff"
import { useEffect, useState } from "react"
import { selectUserRole } from "../../selectors"
import { useDispatch, useStore, useSelector } from "react-redux"
import { ContainerProps, AuthFormData, User } from "../../../public/types"
import { Input, Button, H2 } from "../../components"
import styled from "styled-components"
import { Link, Navigate } from "react-router-dom"
import { setUser } from "../../actions"
import { RootState } from "../../store"
import { ROLE } from "../../../public/constants"

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: underline;
  margin: 20px 0;
  font-size: 18px;
`

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: red;
  margin: 10px 0;
`

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Заполните логин")
    .matches(/^\w+$/, "Неверный логин. Допускаются только буквы и цифры")
    .min(3, "Неверный логин. Минимум 3 символа")
    .max(15, "Неверный логин. Минимум 15 символов"),
  password: yup
    .string()
    .required("Заполните пароль")
    .matches(
      /^[\w#%]+$/,
      "Неверно заполнен пароль. Допускаются только буквы, цифры и знаки # %"
    )
    .min(8, "Неверно заполнен пароль. Минимум 8 символа")
    .max(30, "Неверно заполнен пароль. Минимум 30 символов"),
})

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
  const store = useStore()

  useEffect(() => {
    let currentWasLogout: boolean = (store.getState() as RootState).app
      .wasLogout

    const unsubscribe: () => void = store.subscribe(() => {
      const prevWasLogout: boolean = currentWasLogout
      currentWasLogout = (store.getState() as RootState).app.wasLogout

      if (currentWasLogout !== prevWasLogout) {
        reset()
      }
    })

    return unsubscribe
  }, [])

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
          password: "",
          registered_at: new Date().toISOString(),
          role_id: res.roleId,
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
