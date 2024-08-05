import { IProductInputError, IProductInputForm } from "./types";

export const initialAdminProductForm: IProductInputForm = {
  title: "",
  description: "",
  price: "",
  rating: "",
  category: "pants",
  imageSource: "",
};

export const initialProductInputError: IProductInputError = {
  titleError: "",
  descriptionError: "",
  priceError: "",
  ratingError: "",
  imageSourceError: "",
};
