import { ICartProductType } from "../../../shared/types";

export const createNewProductList = (
  productList: ICartProductType[],
  existingProduct: ICartProductType
): ICartProductType[] => {
  const filteredProducts = productList.filter(
    (p) => p.id === existingProduct.id
  );
  return [
    ...filteredProducts,
    { ...existingProduct, quantity: existingProduct.quantity + 1 },
  ];
};
