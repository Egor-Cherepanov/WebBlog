export const transformerUser = (dbUser) => ({
  id: dbUser.id,
  login: dbUser.login,
  password: dbUser.password,
  registered_at: dbUser.registered_at,
  role_id: dbUser.role_id,
})
