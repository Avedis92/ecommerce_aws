import { IInput, IInputError } from "../../../shared/types";

type EmailVerificationInputError = Pick<IInputError, "codeError">;
type EmailVerificationInput = Pick<IInput, "code">;

export const validateEmailVerificationForm = (
  inputForm: Required<EmailVerificationInput>,
  initialInputErrors: Required<EmailVerificationInputError>
): Required<EmailVerificationInputError> => {
  const errorInputFields = { ...initialInputErrors };
  if (!inputForm.code) {
    errorInputFields.codeError = "Code is required";
  }
  return errorInputFields;
};
