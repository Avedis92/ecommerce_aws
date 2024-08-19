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
      <td className="max-w-12 max-h-20 text-center py-8 px-0 border-b-2 border-b-black">
        <img src={imageSource} />
      </td>
      <td className="text-center py-8 px-0 border-b-2 border-b-black">
        {title}
      </td>
      <td className="text-center py-8 px-0 border-b-2 border-b-black">
        {unitPrice}$
      </td>
      <td className="text-center py-8 px-0 border-b-2 border-b-black">
        {quantity}
      </td>
      <td className="text-center py-8 px-0 border-b-2 border-b-black">
        {totalPrice}
      </td>
      <td className="text-center py-8 px-0 border-b-2 border-b-black">
        <IoClose style={{ cursor: "pointer" }} onClick={handleDelete} />
      </td>
    </tr>
  );
};
export default CartTableRow;
