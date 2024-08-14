export const localEndpoints = {
  products: "/api/v1/products",
};

export const apigatewayEndpoints = {
  addProducts: import.meta.env["VITE_AWS_API_GATEWAY_ADD_PRODUCTS"],
};
