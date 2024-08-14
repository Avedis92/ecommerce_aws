import { localEndpoints } from "./endpoints";
import { processOptions, processUrl } from "./config";
import { IProduct, alertMessageType, IRequestData } from "../types";

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
