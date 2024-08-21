import { useRecoilState } from "recoil";
import { userCartCountState, cartState } from "../shared/recoil/atom";
import useAuth from "./useAuth";
import useAlert from "./useAlert";
import useModal from "./useModal";
import { IProduct, MODAL_TYPE, MessageTypeEnum } from "../shared/types";
import { addNewCart, updateCart } from "../shared/fetch/fetch";
import { createNewProductList } from "../components/organisms/productDetail/helper";

const useAddToCart = (props: IProduct) => {
  const { imageSource, price, title, id } = props;
  const { showErrorMessage, showSuccessMessage } = useAlert();
  const [cart, setCart] = useRecoilState(cartState);
  const [cartCount, setCartCount] = useRecoilState(userCartCountState);
  const { showModal } = useModal();
  const { authUser, verifySessionValidity, signOut } = useAuth();

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
        const accessToken = await verifySessionValidity();
        if (!accessToken) {
          signOut();
          return;
        }
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
          const res = await addNewCart(cartObj, accessToken as string);
          if (res.type === MessageTypeEnum.SUCCESS) {
            showSuccessMessage(res.message);
            setCart(res.payload);
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
              cart.id,
              accessToken as string
            );
            if (res.type === MessageTypeEnum.SUCCESS) {
              showSuccessMessage(res.message);
              setCart(res.payload);
            } else showErrorMessage(res.message);
          } else {
            const res = await updateCart(
              createNewProductList(cart.products, existingProduct),
              cart.id,
              accessToken as string
            );
            if (res.type === MessageTypeEnum.SUCCESS) {
              showSuccessMessage(res.message);
              setCart(res.payload);
            } else showErrorMessage(res.message);
          }
        }
        setCartCount(cartCount + 1);
      }
    } catch {
      // to update
      showErrorMessage("An error occurred");
    }
  };
  return { handleAddToCart };
};

export default useAddToCart;
