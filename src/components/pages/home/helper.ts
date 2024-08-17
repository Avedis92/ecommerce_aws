import { IProduct, CategoryEnum } from "../../../shared/types";

export const extractSpecificProduct = (
  products: Record<string, IProduct[]>[],
  category: CategoryEnum
): IProduct[] => {
  const foundProduct = products.find((p) => Object.keys(p)[0] === category);
  return foundProduct ? foundProduct[category] : [];
};
