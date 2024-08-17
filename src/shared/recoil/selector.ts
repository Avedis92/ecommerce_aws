import { selector } from "recoil";
import { IProduct, CategoryEnum } from "../types";
import { getProductsByCategory } from "../fetch/fetch";

type HomepageProductsType = Record<string, IProduct[]>[];
/* export const getProductsByCategorySelector = selector<IProduct[]>({
  key: "getProductsByCategorySelector",
  get: async () => {
    try {
      const productRef = collection(db, CollectionEnum.PRODUCTS);
      const snapshot = await getDocs(productRef);

      const products = snapshot.docs.map((doc) => ({
        ...(doc.data() as IProduct),
        id: doc.id,
      }));
      return products;
    } catch (e) {
      return [];
    }
  },
}); */

/*export const getSpecificProductsByCategorySelector = selectorFamily<
  IProduct[],
  [CategoryEnum, string]
>({
  key: "getSpecificProductsByCategorySelector",
  get:
    ([category, limit]) =>
    //@ts-ignore
    async () => {
      try {
        const products = await getProductsByCategory(category, limit);
        return products;
      } catch (e) {
        return [];
      }
    },
});*/

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

/* export const getSpecificProductSelector = selectorFamily<IProduct, string>({
  key: "getSpecificProductSelector",
  get:
    (documentId) =>
    // @ts-ignore
    async () => {
      try {
        const docRef = doc(db, CollectionEnum.PRODUCTS, documentId);
        const docSnapShot = await getDoc(docRef);
        return docSnapShot.data();
      } catch (e) {
        return [];
      }
    },
});

export const getSpecificAuthUserFromCollectionSelector = selectorFamily<
  AuthUserExtraInfoType,
  string | undefined
>({
  key: "getSpecificAuthUserFromCollectionSelector",
  // @ts-ignore
  get: (documentId) => async () => {
    try {
      if (documentId) {
        const userDocRef = doc(db, CollectionEnum.USERS, documentId);
        const userDocSnapshot = await getDoc(userDocRef);
        return userDocSnapshot.data();
      }
      return null;
    } catch (e) {
      return {};
    }
  },
});

 export const userCartDetailsSelector = selector<ICart[]>({
  key: "userCartDetailsSelector",
  //@ts-ignore
  get: async ({ get }) => {
    const authUser = get(authenticatedUserState);
    const cartCollection = collection(db, CollectionEnum.CARTS);
    try {
      if (authUser) {
        const q = query(cartCollection, where("userId", "==", authUser.uid));
        const snapshot = await getDocs(q);
        const nonSortedDocs = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as ICart[];
        return nonSortedDocs.sort(
          (a, b) => b.cartUpdateDate - a.cartUpdateDate
        );
      }
      return [];
    } catch (e) {
      return [];
    }
  },
});

export const totalAmountSelector = selector<number>({
  key: "totalAmountSelector",
  // @ts-ignore
  get: ({ get }) => {
    const carts = get(userCartDetailsSelector);
    if (carts.length) {
      return carts.reduce((acc, cart) => {
        return acc + cart.totalPrice;
      }, 0);
    }
  },
}); */
