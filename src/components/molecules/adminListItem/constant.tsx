import { AdminNavEnum } from "../../../shared/types";
import { FaShoppingCart } from "react-icons/fa";
import { ImFolderOpen } from "react-icons/im";

export const listItems = [
  {
    id: AdminNavEnum.ADD_PRODUCT,
    text: "Add product",
    icon: <FaShoppingCart size="1.5rem" color="#eaa300" />,
  },
  {
    id: AdminNavEnum.PRODUCT_LIST,
    text: "Product list",
    icon: <ImFolderOpen size="1.5rem" color="#0078d4" />,
  },
];
