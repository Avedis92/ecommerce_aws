import { useState, ReactElement, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userCartCountState } from "../../../shared/recoil/atom";
import { IProduct, MODAL_TYPE, MessageTypeEnum } from "../../../shared/types";
import { FaStar } from "react-icons/fa"; // filled star
import { FaRegStar } from "react-icons/fa"; // empty star
import { FaStarHalfAlt } from "react-icons/fa"; // half filled star;
import { sizes, selectedSizeStyle } from "./constants";
import useAuth from "../../../hooks/useAuth";
import useModal from "../../../hooks/useModal";
import useAlert from "../../../hooks/useAlert";
import { addNewCart, updateCart } from "../../../shared/fetch/fetch";
import { createNewProductList } from "./helper";

const ProductDetail = (props: IProduct) => {
  const { imageSource, rating, price, title, description, category, id } =
    props;
  const [selectedSize, setSelectedSize] = useState(-1);
  const [ratingStars, setRatingStars] = useState<ReactElement[]>([]);
  const { showErrorMessage, showSuccessMessage } = useAlert();
  const [cartCount, setCartCount] = useRecoilState(userCartCountState);
  const { showModal } = useModal();
  const { authUser, cart } = useAuth();

  const handleSizeSelection = (sizeIndex: number) => {
    setSelectedSize(sizeIndex);
  };
  const handleAddToCart = async () => {
    try {
      if (!authUser) {
        showModal(MODAL_TYPE.DENIED_ACCESS);
      } else {
        /*
        1- if cart already exists we will call update cart endpoint:
        we need to check if the product already exists or not
        if it exists then we will call the update cart endpoint and update the quantity property
        else we will call the update to cart endpoint and add the new product with the quantity of 1

        2- if not we will call add new cart endpoint
         */
        if (!cart) {
          const productToAddOnCart = {
            id,
            title,
            price,
            quantity: 1,
            imageSource,
          };
          const cartObj = {
            userId: authUser.userId,
            products: [productToAddOnCart],
          };
          const res = await addNewCart(cartObj);
          if (res.type === MessageTypeEnum.SUCCESS) {
            showSuccessMessage(res.message);
          } else showErrorMessage(res.message);
        } else {
          // check if the product already exists in the cart
          const existingProduct = cart.products.find((p) => p.id === id);
          if (!existingProduct) {
            const productToAddOnCart = {
              id,
              title,
              price,
              quantity: 1,
              imageSource,
            };
            const res = await updateCart(
              [...cart.products, productToAddOnCart],
              cart.id
            );
            if (res.type === MessageTypeEnum.SUCCESS) {
              showSuccessMessage(res.message);
            } else showErrorMessage(res.message);
          } else {
            const res = await updateCart(
              createNewProductList(cart.products, existingProduct),
              cart.id
            );
            if (res.type === MessageTypeEnum.SUCCESS) {
              showSuccessMessage(res.message);
            } else showErrorMessage(res.message);
          }
        }
        setCartCount(cartCount + 1);
      }
    } catch {
      // to update
      showErrorMessage("Error");
    }
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
    <div className="flex items-stretch gap-x-20 pl-8 mt-12 flex-wrap">
      <div className="max-h-100 max-w-2/5 mt-5">
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
          <div className="flex items-center gap-x-3 gap-y-3 flex-wrap">
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
        <p>Category: {category}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
