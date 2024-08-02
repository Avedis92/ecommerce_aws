export interface IHeaderOptions {
  [index: string]: string | undefined;
  Authorization?: string;
}

export interface IRequestData {
  baseUrl?: string;
  endpoints: string;
  path?: string;
  params?: Record<string, string>;
  method?: "GET" | "POST" | "DELETE" | "PUT";
  headers?: IHeaderOptions;
  body?: string;
}

export interface IField {
  labelName: string;
  placeholder: string;
  value: string;
  error?: string;
  type: "text" | "password";
  onChange: (inputValue: string) => void;
}

export type CategoryType = "pants" | "shirts" | "shoes";

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: CategoryType;
  imageSource: string;
  creationDate: number;
}

export enum CollectionEnum {
  PRODUCTS = "products",
  USERS = "users",
  CARTS = "carts",
}

export enum AdminNavEnum {
  ADD_PRODUCT,
  PRODUCT_LIST,
}

export enum MessageTypeEnum {
  SUCCESS = "Success",
  ERROR = "Error",
}
export interface alertMessageType {
  type: MessageTypeEnum;
  message: string;
}

export enum NavItemEnum {
  SHOP = "Shop",
  PANTS = "Pants",
  SHIRTS = "Shirts",
  SHOES = "Shoes",
  CARTS = "Cart",
}

export enum CategoryEnum {
  PANTS = "pants",
  SHIRTS = "shirts",
  SHOES = "shoes",
}

export interface IInput {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IInputError {
  usernameError?: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError?: string;
}

export enum MODAL_TYPE {
  SIGNUP,
  SIGNIN,
  SIGNOUT,
  DENIED_ACCESS,
}

/* export interface ICart {
  id: string;
  productId: string;
  title: string;
  unitPrice: number;
  imageSource: string;
  quantity: number;
  totalPrice: number;
  cartUpdateDate: number;
  userId: User["uid"];
} */

export interface AuthUserExtraInfoType {
  username: string;
  isAdmin: boolean;
}
