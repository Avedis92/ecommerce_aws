import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { IInput, IInputError, IAuthUser } from "./types";

export const allFieldsAreEmpty = (
  inputFields: IInput | IInputError
): boolean => {
  return Object.values(inputFields).every((i) => !i);
};

export const createAuthUser = (data: CognitoUserAttribute[]): IAuthUser => {
  return {
    username: data?.find((ua) => ua.Name === "email")?.Value as string,
    profileName: data?.find((ua) => ua.Name === "custom:profileName")
      ?.Value as string,
    isAdmin: Boolean(
      +(data?.find((ua) => ua.Name === "custom:isAdmin")?.Value as string)
    ),
    isEmailConfirmed:
      (data?.find((ua) => ua.Name === "email_verified")?.Value as string) ===
      "true"
        ? true
        : false,
  };
};
