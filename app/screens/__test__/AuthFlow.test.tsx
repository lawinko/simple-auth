import { render, fireEvent, waitFor } from "@testing-library/react-native"

import { AuthProvider } from "@/features/auth/AuthContext"
import { AppNavigator } from "@/navigators/AppNavigator"
import { ThemeProvider } from "@/theme/context"
import { clear } from "@/utils/storage"

function renderAuthApp() {
  return render(
    <ThemeProvider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>,
  )
}

describe("Auth flow", () => {
  beforeEach(async () => {
    await clear()
  })

  it("validates signup form, signs up, displays user data, and logs out", async () => {
    const screen = renderAuthApp()

    await waitFor(() => {
      expect(screen.getByText("auth:login.title")).toBeTruthy()
    })

    fireEvent.press(screen.getByTestId("go-to-signup-button"))

    await waitFor(() => {
      expect(screen.getByText("auth:signup.subtitle")).toBeTruthy()
    })

    fireEvent.press(screen.getByTestId("signup-submit-button"))

    await waitFor(() => {
      expect(screen.getByText("auth:validation.nameRequired")).toBeTruthy()
      expect(screen.getByText("auth:validation.emailRequired")).toBeTruthy()
      expect(screen.getByText("auth:validation.passwordRequired")).toBeTruthy()
    })

    fireEvent.changeText(screen.getByTestId("signup-name-input"), "Alex")
    fireEvent.changeText(screen.getByTestId("signup-email-input"), "alex@example.com")
    fireEvent.changeText(screen.getByTestId("signup-password-input"), "secret123")
    fireEvent.press(screen.getByTestId("signup-submit-button"))

    await waitFor(() => {
      expect(screen.getByText("auth:home.title")).toBeTruthy()
      expect(screen.getByTestId("home-user-name").props.children).toBe("Alex")
      expect(screen.getByTestId("home-user-email").props.children).toBe("alex@example.com")
    })

    fireEvent.press(screen.getByTestId("logout-button"))

    await waitFor(() => {
      expect(screen.getByText("auth:login.title")).toBeTruthy()
    })
  })

  it("shows incorrect credentials when login fails", async () => {
    const screen = renderAuthApp()

    await waitFor(() => {
      expect(screen.getByText("auth:login.title")).toBeTruthy()
    })

    fireEvent.press(screen.getByTestId("go-to-signup-button"))
    fireEvent.changeText(screen.getByTestId("signup-name-input"), "Demo User")
    fireEvent.changeText(screen.getByTestId("signup-email-input"), "demo@example.com")
    fireEvent.changeText(screen.getByTestId("signup-password-input"), "secret123")
    fireEvent.press(screen.getByTestId("signup-submit-button"))

    await waitFor(() => {
      expect(screen.getByText("auth:home.title")).toBeTruthy()
    })

    fireEvent.press(screen.getByTestId("logout-button"))

    await waitFor(() => {
      expect(screen.getByText("auth:login.title")).toBeTruthy()
    })

    fireEvent.changeText(screen.getByTestId("login-email-input"), "demo@example.com")
    fireEvent.changeText(screen.getByTestId("login-password-input"), "wrong123")
    fireEvent.press(screen.getByTestId("login-submit-button"))

    await waitFor(() => {
      expect(screen.getByTestId("login-form-error").props.children).toBe(
        "auth:errors.incorrectCredentials",
      )
    })
  })
})
