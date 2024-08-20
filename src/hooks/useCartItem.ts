import useAlert from "./useAlert";
import useAuth from "./useAuth";
import { updateCart } from "../shared/fetch/fetch";
import { ICartProductType, MessageTypeEnum } from "../shared/types";

const useCartItem = () => {
  const { showErrorMessage, showSuccessMessage } = useAlert();
  const { cart, setCart, setCartCount, verifySessionValidity, signOut } =
    useAuth();

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
      const totalCount = res.payload.products.reduce((acc, p) => {
        return acc + p.quantity;
      }, 0);
      setCartCount(totalCount);
    } else showErrorMessage(res.message);
  };
  return { handleCartProductDelete };
};

export default useCartItem;
