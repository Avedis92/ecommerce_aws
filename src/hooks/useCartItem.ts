import { useSetRecoilState, useRecoilState } from "recoil";
import { cartState, userCartCountState } from "../shared/recoil/atom";
import useAlert from "./useAlert";
import useAuth from "./useAuth";
import { updateCart } from "../shared/fetch/fetch";
import { ICartProductType, MessageTypeEnum } from "../shared/types";
import { getTotalProductCount } from "../shared/helpers";

const useCartItem = () => {
  const { showErrorMessage, showSuccessMessage } = useAlert();
  const { verifySessionValidity, signOut } = useAuth();
  const [cart, setCart] = useRecoilState(cartState);
  const setCartCount = useSetRecoilState(userCartCountState);

  const handleCartProductDelete = async (productId: string) => {
    const accessToken = await verifySessionValidity();
    if (!accessToken) {
      signOut();
      return;
    }
    const filteredProduct = cart?.products.filter(
      (p) => p.id !== productId
    ) as ICartProductType[];
    const res = await updateCart(
      filteredProduct,
      cart?.id as string,
      accessToken as string
    );
    if (res.type === MessageTypeEnum.SUCCESS) {
      showSuccessMessage(res.message);
      setCart(res.payload);
      setCartCount(getTotalProductCount(res.payload.products));
    } else showErrorMessage(res.message);
  };
  return { handleCartProductDelete };
};

export default useCartItem;
