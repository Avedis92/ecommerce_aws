import { useRecoilValue } from "recoil";
import { userCartDetailsSelector } from "../../../../shared/recoil/selector";
import NoResult from "../../../molecules/noResult";
import CartTableRow from "../../../molecules/cartTableRow";

const CartDetails = () => {
  const cartDetails = useRecoilValue(userCartDetailsSelector);

  return (
    <div>
      {cartDetails.length > 0 ? (
        <table className="w-full py-0 px-4">
          <thead>
            <tr>
              <th className="border-b-2 border-b-black text-center pb-4">
                Products
              </th>
              <th className="border-b-2 border-b-black text-center pb-4 w-1/3">
                Title
              </th>
              <th className="border-b-2 border-b-black text-center pb-4">
                Price
              </th>
              <th className="border-b-2 border-b-black text-center pb-4">
                Quantity
              </th>
              <th className="border-b-2 border-b-black text-center pb-4">
                Total
              </th>
              <th className="border-b-2 border-b-black text-center pb-4">
                Remove
              </th>
            </tr>
          </thead>
          <tbody className="min-h-80 overflow-y-scroll">
            {cartDetails.length > 0 &&
              cartDetails.map((d) => (
                <CartTableRow
                  key={d.id}
                  unitPrice={d.unitPrice}
                  totalPrice={d.totalPrice}
                  quantity={d.quantity}
                  title={d.title}
                  imageSource={d.imageSource}
                  id={d.id}
                />
              ))}
          </tbody>
        </table>
      ) : (
        <NoResult text="You don't have anything in your cart" />
      )}
    </div>
  );
};

export default CartDetails;
