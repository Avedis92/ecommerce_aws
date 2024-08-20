import AmountSummary from "./amountSummary";
import CartDetails from "./cartDetails";

const Cart = () => {
  return (
    <div className="my-12 mx-8">
      <CartDetails />
      <AmountSummary />
    </div>
  );
};

export default Cart;
