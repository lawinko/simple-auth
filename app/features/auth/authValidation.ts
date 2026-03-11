import * as Yup from "yup"

export interface LoginFormValues {
  email: string
  password: string
}

export interface SignupFormValues {
  name: string
  email: string
  password: string
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

export const loginInitialValues: LoginFormValues = {
  email: "",
  password: "",
}

export const signupInitialValues: SignupFormValues = {
  name: "",
  email: "",
  password: "",
}

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("auth:validation.invalidEmailFormat")
    .required("auth:validation.emailRequired"),
  password: Yup.string()
    .trim()
    .required("auth:validation.passwordRequired")
    .min(6, "auth:validation.passwordMinLength"),
})

export const signupValidationSchema = Yup.object({
  name: Yup.string().trim().required("auth:validation.nameRequired"),
  email: Yup.string()
    .trim()
    .email("auth:validation.invalidEmailFormat")
    .required("auth:validation.emailRequired"),
  password: Yup.string()
    .trim()
    .required("auth:validation.passwordRequired")
    .min(6, "auth:validation.passwordMinLength"),
})
