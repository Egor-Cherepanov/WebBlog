export interface User {
  id: string
  login: string
  password: string
  registered_at: string
  role_id: number
}

export interface Session {
  logOut: () => void
  removeComment?: () => void
}

export interface AuthResponse {
  error: string | null
  res: Session | null
}
