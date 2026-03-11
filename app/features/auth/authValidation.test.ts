import { ValidationError } from "yup"

import {
  loginInitialValues,
  loginValidationSchema,
  normalizeEmail,
  signupInitialValues,
  signupValidationSchema,
} from "./authValidation"

describe("authValidation (Yup)", () => {
  describe("normalizeEmail", () => {
    it("trims and lowercases email values", () => {
      expect(normalizeEmail("  USER@Example.COM ")).toBe("user@example.com")
    })
  })

  describe("initialValues", () => {
    it("exposes empty login initial values", () => {
      expect(loginInitialValues).toEqual({
        email: "",
        password: "",
      })
    })

    it("exposes empty signup initial values", () => {
      expect(signupInitialValues).toEqual({
        name: "",
        email: "",
        password: "",
      })
    })
  })

  describe("loginValidationSchema", () => {
    it("passes with valid values", async () => {
      await expect(
        loginValidationSchema.validate({
          email: "person@example.com",
          password: "123456",
        }),
      ).resolves.toEqual({
        email: "person@example.com",
        password: "123456",
      })
    })

    it("fails with invalid email and short password", async () => {
      await expect(
        loginValidationSchema.validate(
          {
            email: "bad-email",
            password: "123",
          },
          { abortEarly: false },
        ),
      ).rejects.toBeInstanceOf(ValidationError)

      try {
        await loginValidationSchema.validate(
          {
            email: "bad-email",
            password: "123",
          },
          { abortEarly: false },
        )
      } catch (error) {
        const messages = (error as ValidationError).errors
        expect(messages).toContain("auth:validation.invalidEmailFormat")
        expect(messages).toContain("auth:validation.passwordMinLength")
      }
    })
  })

  describe("signupValidationSchema", () => {
    it("passes with valid values", async () => {
      await expect(
        signupValidationSchema.validate({
          name: "Alex",
          email: "alex@example.com",
          password: "secret123",
        }),
      ).resolves.toEqual({
        name: "Alex",
        email: "alex@example.com",
        password: "secret123",
      })
    })

    it("fails with missing required values", async () => {
      await expect(
        signupValidationSchema.validate(
          {
            name: "",
            email: "",
            password: "",
          },
          { abortEarly: false },
        ),
      ).rejects.toBeInstanceOf(ValidationError)

      try {
        await signupValidationSchema.validate(
          {
            name: "",
            email: "",
            password: "",
          },
          { abortEarly: false },
        )
      } catch (error) {
        const messages = (error as ValidationError).errors
        expect(messages).toContain("auth:validation.nameRequired")
        expect(messages).toContain("auth:validation.emailRequired")
        expect(messages).toContain("auth:validation.passwordRequired")
      }
    })
  })
})
