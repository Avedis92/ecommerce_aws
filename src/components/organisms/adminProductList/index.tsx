import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { getAllProductsSelector } from "../../../shared/recoil/selector";
import AdminProductTableRow from "../../molecules/adminProductTableRow";
import useAlert from "../../../hooks/useAlert";

const AdminProductList = () => {
  const productList = useRecoilValue(getAllProductsSelector);
  const { showErrorMessage } = useAlert();

  useEffect(() => {
    if (!productList) {
      showErrorMessage("Failed to load product list. Try again later.");
    }
  }, [productList]);

  return (
    <div
      className="bg-white my-4 mx-0 pt-4 min-w-150 rounded-xl
    flex flex-col justify-around items-center"
    >
      <h1 className="h1-custom-basic">All Products List</h1>
      <table className="w-full py-0 px-4 listTable>thead>th">
        <thead>
          <tr>
            <th>Products</th>
            <th className="w-1/3">Title</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="mi-h-80 overflow-y-scroll listTable>tbody>td">
          {productList &&
            productList.length > 0 &&
            productList.map((p) => (
              <AdminProductTableRow
                key={p.id}
                id={p.id}
                price={p.price}
                title={p.title}
                rating={p.rating}
                category={p.category}
                imageSource={p.imageSource}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminProductList;
