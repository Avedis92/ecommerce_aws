import { localEndpoints } from "./endpoints";
import { processOptions, processUrl } from "./config";
import {
  IProduct,
  alertMessageType,
  IRequestData,
  CategoryEnum,
  ICart,
  ICartProductType,
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

export const getProductById = async (id: string): Promise<IProduct> => {
  const requestData: IRequestData = {
    endpoints: localEndpoints.products,
    path: `/${id}`,
  };
  return fetch(processUrl(requestData), processOptions(requestData)).then(
    (res) => res.json()
  );
};

export const getCartByUserId = async (
  userId?: string
): Promise<ICart | null> => {
  const requestData: IRequestData = {
    endpoints: localEndpoints.carts,
    path: `/${userId}`,
  };
  return fetch(processUrl(requestData), processOptions(requestData)).then(
    (res) => res.json()
  );
};

export const addNewCart = async (
  cartObj: Omit<ICart, "id">
): Promise<alertMessageType> => {
  const requestData: IRequestData = {
    endpoints: localEndpoints.carts,
    path: "/add",
    method: "POST",
    body: JSON.stringify(cartObj),
  };
  return fetch(processUrl(requestData), processOptions(requestData)).then(
    (res) => res.json()
  );
};

export const updateCart = async (
  products: ICartProductType[],
  cartId: string
): Promise<alertMessageType> => {
  const requestData: IRequestData = {
    endpoints: localEndpoints.carts,
    path: `/add/${cartId}`,
    method: "PATCH",
    body: JSON.stringify(products),
  };
  return fetch(processUrl(requestData), processOptions(requestData)).then(
    (res) => res.json()
  );
};
