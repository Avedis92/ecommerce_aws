import { atom } from "recoil";
import {
  AdminNavEnum,
  alertMessageType,
  NavItemEnum,
  MODAL_TYPE,
  ISignUpUser,
  IAuthUser,
  ICart,
} from "../types";

export const alertMessageState = atom<alertMessageType | null>({
  key: "alertMessageState",
  default: null,
});

export const adminNavState = atom({
  key: "adminNavState",
  default: AdminNavEnum.ADD_PRODUCT,
});

export const selectedNavState = atom({
  key: "selectedNavState",
  default: NavItemEnum.SHOP,
});

export const isModalShownState = atom<boolean>({
  key: "isModalShownState",
  default: false,
});

export const modalTypeState = atom<MODAL_TYPE | null>({
  key: "modalTypeState",
  default: null,
});

export const userCartCountState = atom<number>({
  key: "userCartCountState",
  default: 0,
});

export const menuShownState = atom<boolean>({
  key: "menuShownState",
  default: false,
});

export const signUpUserState = atom<ISignUpUser | undefined>({
  key: "signUpUserState",
  default: undefined,
});

export const authUserState = atom<IAuthUser | null>({
  key: "authUserState",
  default: null,
});

export const cartState = atom<ICart | null>({
  key: "cartState",
  default: null,
});

export const imageSourcesState = atom<string[] | null>({
  key: "imageSourcesState",
  default: null,
});
