export interface User {
  id: string
  login: string
  password: string
  registered_at?: string
  role_id: number
  session?: string
}

export interface Session {
  logOut: () => void
  removeComment?: () => void
  [key: string]: (() => void) | undefined
}

export interface Response {
  session: Session
  id: string
  login: string
  roleId: number
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
