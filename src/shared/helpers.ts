import { IInput, IInputError } from "./types";

export const allFieldsAreEmpty = (
  inputFields: IInput | IInputError
): boolean => {
  return Object.values(inputFields).every((i) => !i);
};
