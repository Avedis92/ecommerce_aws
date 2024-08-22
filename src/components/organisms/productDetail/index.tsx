import { useState, ReactElement, useEffect } from "react";
import { IProduct } from "../../../shared/types";
import { FaStar } from "react-icons/fa"; // filled star
import { FaRegStar } from "react-icons/fa"; // empty star
import { FaStarHalfAlt } from "react-icons/fa"; // half filled star;
import { sizes, selectedSizeStyle } from "./constants";
import useAddToCart from "../../../hooks/useAddToCart";

const ProductDetail = (props: IProduct) => {
  const { imageSource, rating, price, title, description, category } = props;
  const [selectedSize, setSelectedSize] = useState(-1);
  const [ratingStars, setRatingStars] = useState<ReactElement[]>([]);
  const { handleAddToCart } = useAddToCart(props);

  const handleSizeSelection = (sizeIndex: number) => {
    setSelectedSize(sizeIndex);
  };

  useEffect(() => {
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5 ? 1 : 0;
    const emptyStar = 5 - filledStars - halfStar;
    setRatingStars([
      ...new Array(filledStars).fill(<FaStar color="orange" />),
      ...new Array(halfStar).fill(<FaStarHalfAlt color="orange" />),
      ...new Array(emptyStar).fill(<FaRegStar color="orange" />),
    ]);
  }, []);

  return (
    <div className="flex items-stretch gap-x-20 pl-8 mt-12 flex-wrap sm-930:justify-center">
      <div className="max-h-100 max-w-2/5 mt-5 sm-930:max-w-4/5">
        <img
          src={imageSource}
          className="w-full max-h-full object-contain object-center"
        />
      </div>
      <div>
        <h1 className="mb-2 h1-custom-basic">{title}</h1>
        <div className="flex items-center gap-x-8">
          <p>{rating}</p>
          <div className="flex items-center gap-x-4">
            {ratingStars.map((rs) => rs)}
          </div>
        </div>
        <p className="mt-0">{price}$</p>
        <p>{description}</p>
        <div className="mb-4">
          <h2 className="text-2xl font-bold  mt-5 mx-0 mb-2 ">Select Size:</h2>
          <div className="flex items-center gap-x-3 gap-y-2 flex-wrap">
            {sizes.map((s, i) => (
              <button
                className={
                  selectedSize === i
                    ? selectedSizeStyle
                    : "text-xl p-4 font-bold hover:bg-black hover:text-white"
                }
                onClick={() => handleSizeSelection(i)}
                key={s}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <button
          className="cursor-pointer text-white bg-red-600 text-xl font-bold 
        border-none py-3 px-6 transform transition duration-300 ease-in-out hover:scale-110 active:scale-90"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
        <p className="my-4 text-lg font-semibold">Category: {category}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
