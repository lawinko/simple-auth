# User Authentication App (Expo + React Native)

Simple authentication app built with React Native and Expo.

## About Ignite Boilerplate

This project is based on [Ignite](https://github.com/infinitered/ignite), Infinite Red's battle-tested React Native boilerplate.

- Official repo: <https://github.com/infinitered/ignite>
- Full docs: <https://docs.infinite.red>
- Ignite CLI quick start:

```bash
npx ignite-cli@latest new MyApp
```

Ignite provides proven defaults for Expo + TypeScript apps (navigation, theming, i18n, testing, generators, and dev tooling).  
This app keeps the Ignite foundation and customizes the auth flow for this assignment.

## Implemented Features

- `AuthContext` using React Context API as the only state-management layer.
- `Login` screen (Formik + Yup):
  - Email + password inputs
  - Validation for invalid email/password format
  - Incorrect-credentials error handling
  - Navigate to Signup
- `Signup` screen (Formik + Yup):
  - Name + email + password inputs
  - Missing-field validation
  - Invalid email validation
  - Password length validation (`>= 6`)
  - Navigate to Login
- `Home` screen:
  - Shows logged-in user name and email
  - Logout support
- Navigation flow using React Navigation:
  - `Login`
  - `Signup`
  - `Home`
- Optional auth persistence implemented using local storage (`@react-native-async-storage/async-storage`).
- Password visibility toggle on Login and Signup.

## Screenshots

| Screen | Preview | Description |
| --- | --- | --- |
| Login | <a href="assets/screenshots/login.png"><img src="assets/screenshots/login.png" alt="Login screen" width="180" /></a> | Main login form with email/password fields and password visibility toggle. |
| Login Validation | <a href="assets/screenshots/login-validation.png"><img src="assets/screenshots/login-validation.png" alt="Login validation errors" width="180" /></a> | Required-field validation messages shown on login submit. |
| Signup | <a href="assets/screenshots/signup.png"><img src="assets/screenshots/signup.png" alt="Signup screen" width="180" /></a> | Account creation form with reusable navigation bar back button. |
| Signup Validation | <a href="assets/screenshots/signup-validation.png"><img src="assets/screenshots/signup-validation.png" alt="Signup validation errors" width="180" /></a> | Password length validation and form error state on signup. |
| Home | <a href="assets/screenshots/home.png"><img src="assets/screenshots/home.png" alt="Home screen" width="180" /></a> | Authenticated home view with user info and logout action. |

## Project Structure (Auth-related)

```text
app/
  features/
    auth/
      AuthContext.tsx
      authValidation.ts
      types.ts
  screens/
    LoginScreen.tsx
    SignupScreen.tsx
    HomeScreen.tsx
    __test__/
      AuthFlow.test.tsx
```

## Run Locally

```bash
pnpm install
```

Expo Go is not supported in this project configuration (AsyncStorage Expo plugin + native prebuild flow).

Use a native run command per platform:

```bash
pnpm ios
# or
pnpm android
```

Then start Metro for the dev client:

```bash
pnpm run start
```

## Test and Quality Commands

```bash
pnpm run compile
pnpm run lint:check
pnpm test --runInBand
```

## Test Coverage Scope

- Unit tests:
  - `authValidation` logic
  - `AuthContext` auth actions (`signup`, `login`, `logout`, duplicate checks)
- UI/integration tests:
  - Full auth flow (`Login -> Signup -> Home -> Logout`)
  - Form validation and incorrect credential messaging
