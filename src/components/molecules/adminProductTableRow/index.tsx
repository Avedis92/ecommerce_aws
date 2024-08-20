/* import { useRecoilRefresher_UNSTABLE } from "recoil";
import { getProductsSelector } from "../../../shared/recoil/selector"; */
import { IoClose } from "react-icons/io5";
import { IProduct } from "../../../shared/types";
// import useAlert from "../../../hooks/useAlert";

const AdminProductTableRow = ({
  title,
  price,
  rating,
  category,
  imageSource,
}: Omit<IProduct, "description" | "quantity" | "creationDate">) => {
  /*  const { showErrorMessage, showSuccessMessage } = useAlert();
  const refreshProducts = useRecoilRefresher_UNSTABLE(getProductsSelector); */

  const handleDelete = async () => {
    /* try {
      const deletedDocRef = doc(db, CollectionEnum.PRODUCTS, id!);
      await deleteDoc(deletedDocRef);
      refreshProducts();
      showSuccessMessage("Product successfully deleted");
    } catch (err) {
      showErrorMessage("Product failed to be deleted. Try again later");
    } */
  };

  return (
    <tr>
      <td className="max-w-40 max-h-40">
        <img
          className="w-full h-full object-cover object-center"
          src={imageSource}
        />
      </td>
      <td>{title}</td>
      <td>{price}$</td>
      <td>{rating}</td>
      <td>{category}</td>
      <td>
        <IoClose style={{ cursor: "pointer" }} onClick={handleDelete} />
      </td>
    </tr>
  );
};
export default AdminProductTableRow;
