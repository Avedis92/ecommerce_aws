import { IoClose } from "react-icons/io5";
import { IProduct } from "../../../shared/types";

const AdminProductTableRow = ({
  title,
  price,
  rating,
  category,
  imageSource,
}: Omit<IProduct, "description" | "quantity" | "creationDate">) => {
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
        <IoClose style={{ cursor: "pointer" }} onClick={() => {}} />
      </td>
    </tr>
  );
};
export default AdminProductTableRow;
