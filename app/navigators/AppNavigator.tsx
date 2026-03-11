/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { NavigationContainer } from "@react-navigation/native"
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack"

import Config from "@/config"
import { useAuth } from "@/features/auth/AuthContext"
import { translate } from "@/i18n/translate"
import { ErrorBoundary } from "@/screens/ErrorScreen/ErrorBoundary"
import { HomeScreen } from "@/screens/HomeScreen"
import { LoginScreen } from "@/screens/LoginScreen"
import { SignupScreen } from "@/screens/SignupScreen"
import { useAppTheme } from "@/theme/context"

import type { AppStackParamList, NavigationProps } from "./navigationTypes"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = () => {
  const { user } = useAuth()
  const {
    theme: { colors },
  } = useAppTheme()

  const authHeaderOptions: NativeStackNavigationOptions = {
    headerShown: true,
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: colors.background,
    },
    headerTitleAlign: "center",
    headerTitleStyle: {
      color: colors.text,
    },
    headerTintColor: colors.text,
  }

  const getHeaderOptions = (title: string): NativeStackNavigationOptions => ({
    ...authHeaderOptions,
    title,
  })

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.background,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      {user ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={getHeaderOptions(translate("auth:signup.title"))}
          />
        </>
      )}
    </Stack.Navigator>
  )
}

export const AppNavigator = (props: NavigationProps) => {
  const { navigationTheme } = useAppTheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme} {...props}>
      <ErrorBoundary catchErrors={Config.catchErrors}>
        <AppStack />
      </ErrorBoundary>
    </NavigationContainer>
  )
}
