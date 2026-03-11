export interface AuthUser {
  name: string
  email: string
}

export interface AuthAccount extends AuthUser {
  password: string
}

export interface AuthActionResult {
  success: boolean
  error?: string
}
