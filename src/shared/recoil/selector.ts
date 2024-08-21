import { selector, selectorFamily } from "recoil";
import { IProduct, CategoryEnum, UserCartDetailsType } from "../types";
import { cartState, imageSourcesState } from "./atom";
import {
  getProductsByCategory,
  getProductById,
  getAllProducts,
} from "../fetch/fetch";

type HomepageProductsType = Record<string, IProduct[]>[];
interface SalesBannerImageSourceType {
  category: CategoryEnum;
  url: string;
}

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

export const imageSourceBannerUrlsSelector = selector<
  SalesBannerImageSourceType[]
>({
  key: "imageSourceBannerUrlsSelector",
  get: ({ get }) => {
    const imageSources = get(imageSourcesState);
    const s3baseUrl = import.meta.env["VITE_AWS_S3_BASE_URL"];
    if (imageSources) {
      return imageSources.map((is) => {
        const obj: SalesBannerImageSourceType = {
          category: CategoryEnum.PANTS,
          url: "",
        };
        if (is.includes("pants")) {
          (obj.category = CategoryEnum.PANTS), (obj.url = `${s3baseUrl}/${is}`);
          return obj;
        }
        if (is.includes("shoes")) {
          (obj.category = CategoryEnum.SHOES), (obj.url = `${s3baseUrl}/${is}`);
          return obj;
        }
        (obj.category = CategoryEnum.SHIRTS), (obj.url = `${s3baseUrl}/${is}`);
        return obj;
      });
    }
    return [];
  },
});

export const imageUrlSelectorFamily = selectorFamily<string, CategoryEnum>({
  key: "imageUrlSelectorFamily",
  get:
    (category) =>
    ({ get }) => {
      const sources = get(imageSourceBannerUrlsSelector);
      if (sources.length) {
        const source = sources.find((s) => s.category === category);
        if (source) return source.url;
        return "";
      }
      return "";
    },
});
