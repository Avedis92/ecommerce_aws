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
  product: IProduct,
  accessToken: string
): Promise<alertMessageType> => {
  const requestData: IRequestData = {
    endpoints: localEndpoints.products,
    path: "/add",
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
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

export const getAllProducts = async (): Promise<IProduct[]> => {
  const requestData: IRequestData = {
    endpoints: localEndpoints.products,
  };
  return fetch(processUrl(requestData), processOptions(requestData)).then(
    (res) => res.json()
  );
};

export const getCartByUserId = async (
  userId: string,
  accessToken: string
): Promise<ICart | null> => {
  const requestData: IRequestData = {
    endpoints: localEndpoints.carts,
    path: `/${userId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return fetch(processUrl(requestData), processOptions(requestData)).then(
    (res) => {
      if (res.status === 404) throw new Error("Cart was not found");
      else return res.json();
    }
  );
};

export const addNewCart = async (
  cartObj: Omit<ICart, "id">,
  accessToken: string
): Promise<alertMessageType & { payload: ICart }> => {
  const requestData: IRequestData = {
    endpoints: localEndpoints.carts,
    path: "/add",
    method: "POST",
    body: JSON.stringify(cartObj),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return fetch(processUrl(requestData), processOptions(requestData)).then(
    (res) => res.json()
  );
};

export const updateCart = async (
  products: ICartProductType[],
  cartId: string,
  accessToken: string
): Promise<alertMessageType & { payload: ICart }> => {
  const requestData: IRequestData = {
    endpoints: localEndpoints.carts,
    path: `/add/${cartId}`,
    method: "PATCH",
    body: JSON.stringify(products),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return fetch(processUrl(requestData), processOptions(requestData)).then(
    (res) => res.json()
  );
};

export const getSalesBannerImageSource = async (): Promise<string[]> => {
  const requestData: IRequestData = {
    endpoints: localEndpoints.images,
  };
  return fetch(processUrl(requestData), processOptions(requestData)).then(
    (res) => res.json()
  );
};
