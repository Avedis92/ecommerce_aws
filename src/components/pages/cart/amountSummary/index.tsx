import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { totalAmountSelector } from "../../../../shared/recoil/selector";

const AmountSummary = () => {
  const [promoValue, setPromoValue] = useState("");
  const amount = useRecoilValue(totalAmountSelector);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoValue(e.target.value);
  };
  return (
    <div className="flex items-center gap-y-8 gap-x-24 flex-wrap my-8 mx-0">
      <div className="min-w-110">
        <h1 className="h1-custom-basic my-5 mx-0">Cart Totals</h1>
        <ul className="list-none p-0 amount-summary-ul > li">
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
        <button
          className="border-none bg-red-600 text-white font-bold cursor-pointer text-xl 
        transform transition duration-200 ease-in-out hover:scale-110 active:scale-90
        py-4 px-8 mt-4"
        >
          Proceed to checkout
        </button>
      </div>
      <div className="self-start mt-5">
        <label htmlFor="promoId" className="block mb-3">
          if you have a promo code, enter it here:
        </label>
        <div className="flex">
          <input
            id="promoId"
            value={promoValue}
            onChange={handleChange}
            placeholder="promo code"
          />
          <button
            className="border-none bg-black text-white font-bold cursor-pointer text-xl  
        transform transition duration-200 ease-in-out hover:scale-110 active:scale-90 py-4 px-8 ml-4"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmountSummary;
