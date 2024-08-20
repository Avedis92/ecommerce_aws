import { selector, selectorFamily } from "recoil";
import { IProduct, CategoryEnum, UserCartDetailsType } from "../types";
import { cartState } from "./atom";
import {
  getProductsByCategory,
  getProductById,
  getAllProducts,
} from "../fetch/fetch";

type HomepageProductsType = Record<string, IProduct[]>[];

export const getProductsByCategorySelector = selectorFamily<
  IProduct[],
  [CategoryEnum, string?]
>({
  key: "getSpecificProductsByCategorySelector",
  get:
    ([category, limit]) =>
    async () => {
      try {
        const products = await getProductsByCategory(category, limit);
        return products;
      } catch (e) {
        return [];
      }
    },
});

export const getHomePageProductsSelector = selector<HomepageProductsType>({
  key: "getHomePageProductsSelector",
  get: async () => {
    try {
      const productsRequests = Object.values(CategoryEnum).map((c) =>
        getProductsByCategory(c, "4")
      );
      const allProducts = await Promise.all(productsRequests);
      return allProducts.map((p, i) => ({
        [Object.values(CategoryEnum)[i]]: [...p],
      }));
    } catch (e) {
      return [];
    }
  },
});

export const getSpecificProductSelector = selectorFamily<IProduct, string>({
  key: "getSpecificProductSelector",
  get:
    (id) =>
    // @ts-ignore
    async () => {
      try {
        const product = await getProductById(id);
        return product;
      } catch (e) {
        return [];
      }
    },
});

export const userCartDetailsSelector = selector<UserCartDetailsType[]>({
  key: "userCartDetailsSelector",
  //@ts-ignore
  get: async ({ get }) => {
    const cart = get(cartState);
    if (cart) {
      return cart.products.map((p) => ({
        id: p.id,
        imageSource: p.imageSource,
        quantity: p.quantity,
        unitPrice: p.price,
        totalPrice: p.price * p.quantity,
        title: p.title,
      }));
    }
  },
});

export const totalAmountSelector = selector<number>({
  key: "totalAmountSelector",
  get: ({ get }) => {
    const cartDetails = get(userCartDetailsSelector);
    return cartDetails.reduce((acc, cd) => {
      return acc + cd.totalPrice;
    }, 0);
  },
});

export const getAllProductsSelector = selector<IProduct[] | null>({
  key: "getAllProductsSelector",
  get: async () => {
    try {
      const products = await getAllProducts();
      return products;
    } catch {
      return null;
    }
  },
});
