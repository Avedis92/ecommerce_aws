import { IoClose } from "react-icons/io5";

import { UserCartDetailsType } from "../../../shared/types";
import useCartItem from "../../../hooks/useCartItem";

const CartTableRow = ({
  id,
  title,
  unitPrice,
  quantity,
  totalPrice,
  imageSource,
}: UserCartDetailsType) => {
  const { handleCartProductDelete } = useCartItem();

  return (
    <tr>
      <td className="max-w-12 max-h-20 p-0 cart-table-row-td-main-styles">
        <img
          className="w-full h-full object-cover object-center"
          src={imageSource}
        />
      </td>
      <td className="cart-table-row-td-main-styles">{title}</td>
      <td className="cart-table-row-td-main-styles">{unitPrice}$</td>
      <td className="cart-table-row-td-main-styles">{quantity}</td>
      <td className="cart-table-row-td-main-styles">{totalPrice}</td>
      <td className="cart-table-row-td-main-styles">
        <IoClose
          style={{ cursor: "pointer" }}
          onClick={() => handleCartProductDelete(id!)}
        />
      </td>
    </tr>
  );
};
export default CartTableRow;
