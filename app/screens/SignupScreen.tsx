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
  signupInitialValues,
  SignupFormValues,
  signupValidationSchema,
} from "@/features/auth/authValidation"
import { TxKeyPath } from "@/i18n"
import { translate } from "@/i18n/translate"
import { AppStackScreenProps } from "@/navigators/navigationTypes"

export function SignupScreen({ navigation }: AppStackScreenProps<"Signup">) {
  const { signup } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [formError, setFormError] = useState<TxKeyPath>()

  const passwordToggleTx: TxKeyPath = showPassword
    ? "auth:common.hidePassword"
    : "auth:common.showPassword"
  const passwordToggleLabel = translate(passwordToggleTx)

  const PasswordRightAccessory = (accessoryProps: TextFieldAccessoryProps) => {
    return (
      <PressableIcon
        testID="signup-password-toggle"
        accessibilityRole="button"
        accessibilityLabel={passwordToggleLabel}
        icon={showPassword ? "hidden" : "view"}
        size={20}
        containerStyle={[accessoryProps.style, styles.passwordToggleAccessory]}
        onPress={() => setShowPassword((value) => !value)}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text tx="auth:signup.subtitle" preset="default" style={styles.subtitle} />

        <Formik<SignupFormValues>
          initialValues={signupInitialValues}
          validationSchema={signupValidationSchema}
          onSubmit={(values) => {
            setFormError(undefined)
            const signupResult = signup(values.name, values.email, values.password)
            if (!signupResult.success) {
              setFormError(signupResult.error as TxKeyPath)
            }
          }}
        >
          {(formikProps) => (
            <>
              <Field
                component={FormTextField}
                testID="signup-name-input"
                name="name"
                labelTx="auth:signup.nameLabel"
                placeholderTx="auth:signup.namePlaceholder"
              />

              <Field
                component={FormTextField}
                testID="signup-email-input"
                name="email"
                autoCapitalize="none"
                keyboardType="email-address"
                labelTx="auth:signup.emailLabel"
                placeholderTx="auth:signup.emailPlaceholder"
              />

              <Field
                component={FormTextField}
                testID="signup-password-input"
                name="password"
                labelTx="auth:signup.passwordLabel"
                placeholderTx="auth:signup.passwordPlaceholder"
                secureTextEntry={!showPassword}
                RightAccessory={PasswordRightAccessory}
              />

              {formError ? (
                <Text testID="signup-form-error" tx={formError} style={styles.formError} />
              ) : null}

              <Button
                testID="signup-submit-button"
                tx="auth:signup.submit"
                preset="filled"
                style={styles.primaryButton}
                onPress={() => formikProps.handleSubmit()}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  )
}

const palette = {
  appBackground: "#EAF8F5",
  cardShadow: "#0B3D32",
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
})
