import { PropsWithChildren } from "react"
import { act, renderHook } from "@testing-library/react-native"

import { AuthProvider, useAuth } from "./AuthContext"

function createWrapper({
  initialAccounts,
}: {
  initialAccounts?: Array<{ name: string; email: string; password: string }>
}) {
  return function Wrapper({ children }: PropsWithChildren) {
    return (
      <AuthProvider disablePersistence initialAccounts={initialAccounts}>
        {children}
      </AuthProvider>
    )
  }
}

describe("AuthContext", () => {
  it("creates an account and logs the user in during signup", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper({}),
    })

    act(() => {
      result.current.signup("John Doe", "John@Example.com", "secret123")
    })

    expect(result.current.user).toEqual({
      name: "John Doe",
      email: "john@example.com",
    })
  })

  it("rejects duplicate signup emails", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper({
        initialAccounts: [{ name: "John", email: "john@example.com", password: "secret123" }],
      }),
    })

    let signupResult
    act(() => {
      signupResult = result.current.signup("John 2", "john@example.com", "secret456")
    })

    expect(signupResult).toEqual({
      success: false,
      error: "auth:errors.accountAlreadyExists",
    })
  })

  it("logs in with valid credentials", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper({
        initialAccounts: [{ name: "John", email: "john@example.com", password: "secret123" }],
      }),
    })

    let loginResult
    act(() => {
      loginResult = result.current.login("john@example.com", "secret123")
    })

    expect(loginResult).toEqual({ success: true })
    expect(result.current.user).toEqual({
      name: "John",
      email: "john@example.com",
    })
  })

  it("rejects incorrect credentials", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper({
        initialAccounts: [{ name: "John", email: "john@example.com", password: "secret123" }],
      }),
    })

    let loginResult
    act(() => {
      loginResult = result.current.login("john@example.com", "wrong-password")
    })

    expect(loginResult).toEqual({
      success: false,
      error: "auth:errors.incorrectCredentials",
    })
    expect(result.current.user).toBeNull()
  })

  it("logs out the current user", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper({}),
    })

    act(() => {
      result.current.signup("John Doe", "john@example.com", "secret123")
    })

    expect(result.current.user?.email).toBe("john@example.com")

    act(() => {
      result.current.logout()
    })

    expect(result.current.user).toBeNull()
  })
})
