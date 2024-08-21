import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilState } from "recoil";
import {
  userCartCountState,
  cartState,
  imageSourcesState,
} from "../../../shared/recoil/atom";
import { FiShoppingCart } from "react-icons/fi";
import NavLeftContent from "../../molecules/navLeftContent";
import ProductNavigator from "./productNavigator";
import UserSettings from "../../molecules/userSettings";
import useAuth from "../../../hooks/useAuth";
import useAlert from "../../../hooks/useAlert";
import useNavbar from "../../../hooks/useNavbar";
import { MODAL_TYPE } from "../../../shared/types";
import {
  getCartByUserId,
  getSalesBannerImageSource,
} from "../../../shared/fetch/fetch";
import { getTotalProductCount } from "../../../shared/helpers";

const Navbar = () => {
  const navigate = useNavigate();
  const { signOut, authUser, verifySessionValidity } = useAuth();
  const { showErrorMessage } = useAlert();
  const [cartCount, setCartCount] = useRecoilState(userCartCountState);
  const setCart = useSetRecoilState(cartState);
  const setImageSource = useSetRecoilState(imageSourcesState);
  const { pathname, showModal } = useNavbar();

  const handleSignIn = () => {
    navigate("/signIn");
  };

  const navigateToCart = () => {
    if (authUser) {
      navigate("/cart");
    } else {
      showModal(MODAL_TYPE.DENIED_ACCESS);
    }
  };

  const getImageSource = async () => {
    const sources = await getSalesBannerImageSource();
    setImageSource(sources);
  };

  useEffect(() => {
    // window.addEventListener("resize", handleWindowSize);
    const loader = document.querySelector(
      ".appLoaderContainer"
    ) as HTMLDivElement;
    if (loader) {
      loader.style.display = "none";
    }
    getImageSource();

    // return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  const updateCartInfo = async () => {
    try {
      const accessToken = await verifySessionValidity();
      if (accessToken) {
        const cart = await getCartByUserId(
          authUser?.userId as string,
          accessToken as string
        );
        if (cart) {
          setCart(cart);
          setCartCount(getTotalProductCount(cart.products));
        }
      }
    } catch (e) {
      showErrorMessage((e as Error).message);
    }
  };

  useEffect(() => {
    if (authUser) {
      updateCartInfo();
    }
  }, [authUser]);

  return (
    <nav className="flex justify-between items-center bg-white py-0 px-8">
      <NavLeftContent title="Men's Wear" />
      <ProductNavigator />
      <div className="flex items-center gap-x-8">
        {authUser ? (
          <UserSettings
            authUserExtraInfo={authUser}
            pathname={pathname}
            handleSignOut={signOut}
          />
        ) : (
          <button
            className="py-4 px-2 w-24 bg-cyan-500 text-white font-bold 
          cursor-pointer text-xl border-none rounded-xl 
          transform transition duration-200 ease-in-out hover:scale-110 active:scale-90 "
            onClick={handleSignIn}
          >
            Sign in
          </button>
        )}
        <div className="relative cursor-pointer" onClick={navigateToCart}>
          <FiShoppingCart size="2rem" />
          <span
            className="rounded-full text-white bg-red-600
          font-bold absolute right-0.5 w-5 h-5 inline-flex top-0
          justify-center items-center"
          >
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
