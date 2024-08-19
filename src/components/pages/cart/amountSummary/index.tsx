import React, { useState } from "react";
import { IAmountSummaryProps } from "./types";
import styles from "./style.module.css";

const AmountSummary = ({ amount }: IAmountSummaryProps) => {
  const {
    amountSummaryContainer,
    amountContainer,
    promoContainer,
    cartButton,
    checkoutButton,
    promoButton,
  } = styles;
  const [promoValue, setPromoValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoValue(e.target.value);
  };
  return (
    <div className={amountSummaryContainer}>
      <div className={amountContainer}>
        <h1>Cart Totals</h1>
        <ul>
          <li>
            <span>Subtotal</span>
            <span>{amount}$</span>
          </li>
          <li>
            <span>Shopping Fee</span>
            <span>Free</span>
          </li>
          <li>
            <strong>
              <span>Total</span>
            </strong>
            <strong>
              <span>{amount}$</span>
            </strong>
          </li>
        </ul>
        <button className={`${cartButton} ${checkoutButton}`}>
          Proceed to checkout
        </button>
      </div>
      <div className={promoContainer}>
        <label htmlFor="promoId">
          if you have a promo code, enter it here:
        </label>
        <div>
          <input
            id="promoId"
            value={promoValue}
            onChange={handleChange}
            placeholder="promo code"
          />
          <button className={`${cartButton} ${promoButton}`}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AmountSummary;
