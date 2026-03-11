import { memo, forwardRef } from "react"
import { StyleProp, TextStyle } from "react-native"
import { ErrorMessage, FieldProps } from "formik"

import { TxKeyPath } from "@/i18n"
import { useAppTheme } from "@/theme/context"

import { Text } from "./Text"
import { TextField, TextFieldProps } from "./TextField"

export interface FormTextFieldProps extends Omit<TextFieldProps, "ref"> {
  field?: FieldProps["field"]
  form?: FieldProps["form"]
  errorTextStyle?: StyleProp<TextStyle>
}

export const FormTextField = memo(
  forwardRef<any, FormTextFieldProps>(function FormTextField(props, ref) {
    const { field, form, errorTextStyle, HelperTextProps, ...textFieldProps } = props
    const {
      theme: { colors },
    } = useAppTheme()

    const name = field?.name ?? ""

    return (
      <>
        <TextField
          ref={ref}
          {...textFieldProps}
          value={field?.value ?? ""}
          onChangeText={(text) => field?.onChange(name)(text)}
          onBlur={() => {
            form?.setFieldTouched(name)
            field?.onBlur(name)
          }}
        />

        {!!name && (
          <ErrorMessage
            name={name}
            render={(errorMessage) => {
              const isTxKey = typeof errorMessage === "string" && errorMessage.includes(":")

              return (
                <Text
                  preset="formHelper"
                  tx={isTxKey ? (errorMessage as TxKeyPath) : undefined}
                  text={!isTxKey ? String(errorMessage) : undefined}
                  style={[{ color: colors.error }, errorTextStyle, HelperTextProps?.style]}
                />
              )
            }}
          />
        )}
      </>
    )
  }),
)
