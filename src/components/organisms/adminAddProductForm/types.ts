import { CategoryType } from "../../../shared/types";
export interface IProductInputError {
  titleError: string;
  descriptionError: string;
  priceError: string;
  ratingError: string;
  imageSourceError: string;
}

export interface IProductInputForm {
  title: string;
  description: string;
  price: string;
  rating: string;
  category: CategoryType;
  imageSource: string;
}
