import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

import { load, remove, save } from "@/utils/storage"

import { normalizeEmail } from "./authValidation"
import { AuthAccount, AuthActionResult, AuthUser } from "./types"

const AUTH_ACCOUNTS_STORAGE_KEY = "auth.accounts"
const AUTH_USER_STORAGE_KEY = "auth.user"

export interface AuthProviderProps extends PropsWithChildren {
  disablePersistence?: boolean
  initialAccounts?: AuthAccount[]
  initialUser?: AuthUser | null
}

interface AuthContextValue {
  user: AuthUser | null
  login: (email: string, password: string) => AuthActionResult
  signup: (name: string, email: string, password: string) => AuthActionResult
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

function sanitizeUser(user: AuthUser): AuthUser {
  return { name: user.name.trim(), email: normalizeEmail(user.email) }
}

function sanitizeAccount(account: AuthAccount): AuthAccount {
  return { ...sanitizeUser(account), password: account.password.trim() }
}

export function AuthProvider({
  children,
  disablePersistence = false,
  initialAccounts,
  initialUser,
}: AuthProviderProps) {
  const [accounts, setAccounts] = useState<AuthAccount[]>(() => initialAccounts?.map(sanitizeAccount) ?? [])
  const [user, setUser] = useState<AuthUser | null>(() => {
    if (initialUser === undefined) return null
    return initialUser ? sanitizeUser(initialUser) : null
  })
  const [isHydrated, setIsHydrated] = useState(disablePersistence)

  useEffect(() => {
    let isMounted = true

    const hydrateState = async () => {
      if (disablePersistence) {
        if (isMounted) setIsHydrated(true)
        return
      }

      if (initialAccounts === undefined) {
        const savedAccounts = await load<AuthAccount[]>(AUTH_ACCOUNTS_STORAGE_KEY)
        if (isMounted && Array.isArray(savedAccounts)) {
          setAccounts(savedAccounts.map(sanitizeAccount))
        }
      }

      if (initialUser === undefined) {
        const savedUser = await load<AuthUser>(AUTH_USER_STORAGE_KEY)
        if (isMounted) {
          setUser(savedUser ? sanitizeUser(savedUser) : null)
        }
      }

      if (isMounted) setIsHydrated(true)
    }

    void hydrateState()

    return () => {
      isMounted = false
    }
  }, [disablePersistence, initialAccounts, initialUser])

  useEffect(() => {
    if (disablePersistence || !isHydrated) return
    void save(AUTH_ACCOUNTS_STORAGE_KEY, accounts)
  }, [accounts, disablePersistence, isHydrated])

  useEffect(() => {
    if (disablePersistence || !isHydrated) return
    if (user) void save(AUTH_USER_STORAGE_KEY, user)
    else void remove(AUTH_USER_STORAGE_KEY)
  }, [user, disablePersistence, isHydrated])

  const login = useCallback(
    (email: string, password: string): AuthActionResult => {
      const match = accounts.find(
        (a) => a.email === normalizeEmail(email) && a.password === password.trim(),
      )

      if (!match) return { success: false, error: "auth:errors.incorrectCredentials" }

      setUser(sanitizeUser(match))
      return { success: true }
    },
    [accounts],
  )

  const signup = useCallback(
    (name: string, email: string, password: string): AuthActionResult => {
      const newAccount = sanitizeAccount({ name, email, password } as AuthAccount)

      if (accounts.some((a) => a.email === newAccount.email)) {
        return { success: false, error: "auth:errors.accountAlreadyExists" }
      }

      setAccounts((prev) => [...prev, newAccount])
      setUser(sanitizeUser(newAccount))
      return { success: true }
    },
    [accounts],
  )

  const logout = useCallback(() => setUser(null), [])

  const value = useMemo<AuthContextValue>(
    () => ({ user, login, signup, logout }),
    [user, login, signup, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}
