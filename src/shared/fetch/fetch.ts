import { localEndpoints } from "./endpoints";
import { processOptions, processUrl } from "./config";
import {
  IProduct,
  alertMessageType,
  IRequestData,
  CategoryEnum,
} from "../types";

export const addProduct = async (
  product: IProduct
): Promise<alertMessageType> => {
  const requestData: IRequestData = {
    endpoints: localEndpoints.products,
    path: "/add",
    method: "POST",
    body: JSON.stringify(product),
  };
  return fetch(processUrl(requestData), processOptions(requestData)).then(
    (res) => res.json()
  );
};

export const getProductsByCategory = async (
  category: CategoryEnum,
  limit?: string
): Promise<IProduct[]> => {
  const requestData: IRequestData = {
    endpoints: localEndpoints.products,
    path: `/categories/${category}`,
    params: {
      limit: limit ?? "12",
    },
  };
  return fetch(processUrl(requestData), processOptions(requestData)).then(
    (res) => res.json()
  );
};
