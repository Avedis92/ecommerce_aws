import { IProductInputError, IProductInputForm } from "./types";

export const allFieldsAreEmpty = (
  inputFields: IProductInputError | IProductInputForm
): boolean => {
  return Object.values(inputFields).every((i) => !i);
};

export const validateProductInputs = (
  inputForm: IProductInputForm,
  initialInputError: IProductInputError
): IProductInputError => {
  const errorInputFields = { ...initialInputError };
  if (!inputForm.title) {
    errorInputFields.titleError = "Title is required";
  }
  if (!inputForm.description) {
    errorInputFields.descriptionError = "Description is required";
  }
  if (!inputForm.imageSource) {
    errorInputFields.imageSourceError = "Image Source is required";
  }
  if (!inputForm.price) {
    errorInputFields.priceError = "Price is required";
  }
  if (isNaN(+inputForm.price)) {
    errorInputFields.priceError = "Price should only be a number";
  }
  if (!inputForm.rating) {
    errorInputFields.ratingError = "Rating is required";
  }
  if (isNaN(+inputForm.rating)) {
    errorInputFields.ratingError = "Rating should only be a number";
  }
  return errorInputFields;
};
