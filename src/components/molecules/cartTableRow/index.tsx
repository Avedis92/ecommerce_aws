/* import { useRecoilRefresher_UNSTABLE, useRecoilState } from "recoil";
import { userCartDetailsSelector } from "../../../shared/recoil/selector";
import { userCartCountState } from "../../../shared/recoil/atom"; */
import { IoClose } from "react-icons/io5";

import { UserCartDetailsType } from "../../../shared/types";
// import useAlert from "../../../hooks/useAlert";

const CartTableRow = ({
  title,
  unitPrice,
  quantity,
  totalPrice,
  imageSource,
}: UserCartDetailsType) => {
  /*const { showErrorMessage, showSuccessMessage } = useAlert();
  const refreshCarts = useRecoilRefresher_UNSTABLE(userCartDetailsSelector);
  const [cartCount, setCartCount] = useRecoilState(userCartCountState); */

  const handleDelete = async () => {
    /* try {
      const deletedDocRef = doc(db, CollectionEnum.CARTS, id);
      await deleteDoc(deletedDocRef);
      refreshCarts();
      setCartCount(cartCount - quantity);
      showSuccessMessage("Cart successfully deleted");
    } catch (err) {
      showErrorMessage("Cart failed to be deleted. Try again later");
    } */
  };

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
        <IoClose style={{ cursor: "pointer" }} onClick={handleDelete} />
      </td>
    </tr>
  );
};
export default CartTableRow;
