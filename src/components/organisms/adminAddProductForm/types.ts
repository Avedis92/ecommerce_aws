import { CategoryType } from "../../../shared/types";
export interface IProductInputError {
  titleError: string;
  descriptionError: string;
  priceError: string;
  ratingError: string;
  imageSourceError: string;
  quantityError: string;
}

export interface IProductInputForm {
  title: string;
  description: string;
  price: string;
  rating: string;
  quantity: string;
  category: CategoryType;
  imageSource: string;
}
