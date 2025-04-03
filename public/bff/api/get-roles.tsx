import { Role } from "../../types"

export const getRoles = (): Promise<Role[]> =>
  fetch("http://localhost:3000/roles").then((loadedRoles) => loadedRoles.json())
