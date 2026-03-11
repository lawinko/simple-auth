import { PropsWithChildren } from "react"
import { act, renderHook, waitFor } from "@testing-library/react-native"

import { clear } from "@/utils/storage"

import { AuthProvider, useAuth } from "./AuthContext"

function createWrapper() {
  return function Wrapper({ children }: PropsWithChildren) {
    return <AuthProvider>{children}</AuthProvider>
  }
}

describe("AuthContext", () => {
  beforeEach(async () => {
    await clear()
  })

  it("creates an account and logs the user in during signup", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isHydrated).toBe(true)
    })

    act(() => {
      result.current.signup("John Doe", "John@Example.com", "secret123")
    })

    expect(result.current.user).toEqual({
      name: "John Doe",
      email: "john@example.com",
    })
  })

  it("rejects duplicate signup emails", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isHydrated).toBe(true)
    })

    act(() => {
      result.current.signup("John", "john@example.com", "secret123")
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

  it("logs in with valid credentials", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isHydrated).toBe(true)
    })

    act(() => {
      result.current.signup("John", "john@example.com", "secret123")
      result.current.logout()
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

  it("rejects incorrect credentials", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isHydrated).toBe(true)
    })

    act(() => {
      result.current.signup("John", "john@example.com", "secret123")
      result.current.logout()
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

  it("logs out the current user", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isHydrated).toBe(true)
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
