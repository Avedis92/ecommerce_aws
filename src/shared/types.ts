export interface IHeaderOptions {
  [index: string]: string | undefined;
  Authorization?: string;
}

export interface IRequestData {
  baseUrl?: string;
  endpoints: string;
  path?: string;
  params?: Record<string, string>;
  method?: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  headers?: IHeaderOptions;
  body?: string;
  apigatewayEndpoint?: string;
}

export interface IField {
  labelName: string;
  placeholder: string;
  value: string;
  error?: string;
  type: "text" | "password" | "number";
  onChange: (inputValue: string) => void;
}

export type CategoryType = "pants" | "shirts" | "shoes";

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  quantity: number;
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
  SUCCESS = "success",
  ERROR = "error",
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
  code?: string;
}

export interface IInputError {
  usernameError?: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError?: string;
  codeError?: string;
}

export enum MODAL_TYPE {
  SIGNUP,
  SIGNIN,
  SIGNOUT,
  DENIED_ACCESS,
  EMAIL_VERIFICATION,
}

export interface IUser {
  username: string;
  isVerified: boolean;
}
interface ISingUpUserProps {
  username: string;
  userSub: string;
  userConfirmed: boolean;
}
export interface ISignUpUser {
  user: ISingUpUserProps;
}

export interface IAuthUser {
  username: string;
  profileName: string;
  isAdmin: boolean;
  isEmailConfirmed: boolean;
  userId: string;
}

export type ICartProductType = Pick<
  IProduct,
  "id" | "price" | "quantity" | "imageSource" | "title"
>;
export interface ICart {
  id: string;
  userId: string;
  products: ICartProductType[];
}
export type UserCartDetailsType = Omit<ICartProductType, "price"> & {
  unitPrice: number;
  totalPrice: number;
};
