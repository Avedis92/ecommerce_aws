import { useRecoilValue, useRecoilRefresher_UNSTABLE } from "recoil";
import { totalAmountSelector } from "../../../shared/recoil/selector";
import AmountSummary from "./amountSummary";
import CartDetails from "./cartDetails";
import styles from "./style.module.css";

const Cart = () => {
  const totalAmount = useRecoilValue(totalAmountSelector);
  // const refreshCarts = useRecoilRefresher_UNSTABLE(userCartDetailsSelector);
  const { cartPageContainer } = styles;

  /* useEffect(() => {
    refreshCarts();
  }, []); */
  return (
    <div className={cartPageContainer}>
      <CartDetails />
      <AmountSummary amount={totalAmount} />
    </div>
  );
};

export default Cart;
