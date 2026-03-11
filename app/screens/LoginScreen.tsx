import { useState } from "react"
import { Pressable, StyleSheet, View } from "react-native"
import { Field, Formik } from "formik"

import { Button } from "@/components/Button"
import { FormTextField } from "@/components/FormTextField"
import { PressableIcon } from "@/components/Icon"
import { Text } from "@/components/Text"
import { TextFieldAccessoryProps } from "@/components/TextField"
import { useAuth } from "@/features/auth/AuthContext"
import {
  loginInitialValues,
  LoginFormValues,
  loginValidationSchema,
} from "@/features/auth/authValidation"
import { TxKeyPath } from "@/i18n"
import { translate } from "@/i18n/translate"
import { AppStackScreenProps } from "@/navigators/navigationTypes"

export function LoginScreen({ navigation }: AppStackScreenProps<"Login">) {
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [formError, setFormError] = useState<TxKeyPath>()

  const passwordToggleTx: TxKeyPath = showPassword
    ? "auth:common.hidePassword"
    : "auth:common.showPassword"
  const passwordToggleLabel = translate(passwordToggleTx)

  const PasswordRightAccessory = (accessoryProps: TextFieldAccessoryProps) => {
    return (
      <PressableIcon
        testID="login-password-toggle"
        accessibilityRole="button"
        accessibilityLabel={passwordToggleLabel}
        icon={showPassword ? "hidden" : "view"}
        size={20}
        containerStyle={[accessoryProps.style, styles.passwordToggleAccessory]}
        onPress={() => setShowPassword((value) => !value)}
      />
    )
  }

  function onNavigateToSignup() {
    navigation.navigate("Signup")
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text tx="auth:login.title" preset="heading" style={styles.title} />
        <Text tx="auth:login.subtitle" preset="default" style={styles.subtitle} />

        <Formik<LoginFormValues>
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => {
            setFormError(undefined)
            const loginResult = login(values.email, values.password)
            if (!loginResult.success) {
              setFormError(loginResult.error as TxKeyPath)
            }
          }}
        >
          {(formikProps) => (
            <>
              <Field
                component={FormTextField}
                testID="login-email-input"
                name="email"
                autoCapitalize="none"
                keyboardType="email-address"
                labelTx="auth:login.emailLabel"
                placeholderTx="auth:login.emailPlaceholder"
              />

              <Field
                component={FormTextField}
                testID="login-password-input"
                name="password"
                labelTx="auth:login.passwordLabel"
                placeholderTx="auth:login.passwordPlaceholder"
                secureTextEntry={!showPassword}
                RightAccessory={PasswordRightAccessory}
              />

              {formError ? (
                <Text testID="login-form-error" tx={formError} style={styles.formError} />
              ) : null}

              <Button
                testID="login-submit-button"
                tx="auth:login.submit"
                preset="filled"
                style={styles.primaryButton}
                onPress={() => formikProps.handleSubmit()}
              />
            </>
          )}
        </Formik>

        <Pressable
          testID="go-to-signup-button"
          accessibilityRole="button"
          onPress={onNavigateToSignup}
          style={styles.linkButton}
        >
          <Text tx="auth:login.goToSignup" style={styles.linkText} />
        </Pressable>
      </View>
    </View>
  )
}

const palette = {
  appBackground: "#F1F5FF",
  cardShadow: "#112D4E",
  cardSurface: "#FFFFFF",
  danger: "#C62828",
  link: "#2D6CEA",
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.cardSurface,
    borderRadius: 16,
    elevation: 4,
    gap: 12,
    padding: 18,
    shadowColor: palette.cardShadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
  },
  container: {
    backgroundColor: palette.appBackground,
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  formError: {
    color: palette.danger,
  },
  linkButton: {
    alignItems: "center",
    paddingVertical: 10,
  },
  linkText: {
    color: palette.link,
    fontWeight: "600",
  },
  passwordToggleAccessory: {
    justifyContent: "center",
    minHeight: 40,
    minWidth: 40,
  },
  primaryButton: {
    marginTop: 8,
  },
  subtitle: {
    marginBottom: 4,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
  },
})
