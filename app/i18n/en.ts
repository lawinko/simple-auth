const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  welcomeScreen: {
    postscript:
      "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
  auth: {
    common: {
      showPassword: "Show password",
      hidePassword: "Hide password",
    },
    login: {
      title: "Welcome Back",
      subtitle: "Login with your account to continue.",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter your password",
      submit: "Login",
      goToSignup: "Go to Signup",
    },
    signup: {
      title: "Create Account",
      subtitle: "Signup with your details to access the home screen.",
      nameLabel: "Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "Choose a secure password",
      submit: "Signup",
      goToLogin: "Go to Login",
    },
    home: {
      title: "Home",
      subtitle: "You are logged in.",
      nameLabel: "Name",
      emailLabel: "Email",
      logout: "Logout",
    },
    validation: {
      invalidEmailFormat: "Invalid email format.",
      emailRequired: "Email is required.",
      passwordRequired: "Password is required.",
      invalidPasswordFormat: "Invalid password format. Use at least 6 characters.",
      nameRequired: "Name is required.",
      passwordMinLength: "Password must be at least 6 characters.",
    },
    errors: {
      incorrectCredentials: "Incorrect credentials.",
      accountAlreadyExists: "An account with this email already exists.",
    },
  },
}

export default en
export type Translations = typeof en
