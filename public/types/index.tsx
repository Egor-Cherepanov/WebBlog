export interface User {
  id: string
  login: string
  password: string
  registered_at: string
  role_id: number
  session?: string
}

export interface Session {
  logOut: () => void
  removeComment?: () => void
  [key: string]: (() => void) | undefined
}

export interface Response {
  session: string
  id: string
  login: string
  role_id: number
  password: string
}

export interface AuthResponse {
  error: string | null
  res: Response | null
}

export interface ContainerProps {
  className?: string
}

export interface IconContainerProps {
  className?: string
  id: string
  size?: string
  margin?: string
  disabled?: boolean
  onClick?: () => void
}

export interface FooterProps {
  className?: string
}

export interface WeatherData {
  name: string
  main: {
    temp: number
  }
  weather: Array<{
    description: string
  }>
}

export interface AuthFormData {
  login: string
  password: string
}

export interface AuthFormData {
  login: string
  password: string
}

export interface RegisterFormData {
  login: string
  password: string
  passcheck: string
}

export interface Role {
  id: number
  name: string
}

export interface UserRowProps extends ContainerProps {
  login: string
  id: string
  registered_at?: string
  userRoleId: number
  roles?: Role[]
  onUsersRemove: () => void
}
