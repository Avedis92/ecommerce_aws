import { IInput, IInputError } from "../../../shared/types";

export const validateSignInForm = (
  inputForm: Omit<IInput, "confirmPassword" | "username" | "code">,
  initialInputErrors: Omit<
    IInputError,
    "confirmPasswordError" | "usernameError" | "codeError"
  >
) => {
  const errorInputFields = { ...initialInputErrors };
  if (!inputForm.email) {
    errorInputFields.emailError = "email is required";
  }
  if (!inputForm.password) {
    errorInputFields.passwordError = "Password is required";
  }
  return errorInputFields;
};
