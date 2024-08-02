import { IInput, IInputError } from "../../../shared/types";

export const validateSignUpForm = (
  inputForm: IInput,
  initialInputErrors: Required<IInputError>
): Required<IInputError> => {
  const errorInputFields = { ...initialInputErrors };
  if (!inputForm.username) {
    errorInputFields.usernameError = "Username is required";
  }
  if (!inputForm.email) {
    errorInputFields.emailError = "Email is required";
  }
  if (!inputForm.password) {
    errorInputFields.passwordError = "Password is required";
  }
  if (
    inputForm.password !== inputForm.confirmPassword ||
    !inputForm.confirmPassword
  ) {
    errorInputFields.confirmPasswordError =
      "The content does not match the password";
  }
  return errorInputFields;
};
