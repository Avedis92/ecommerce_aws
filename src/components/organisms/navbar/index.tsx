import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import NavLeftContent from "../../molecules/navLeftContent";
import ProductNavigator from "./productNavigator";
import UserSettings from "../../molecules/userSettings";
import useAuth from "../../../hooks/useAuth";
import useNavbar from "../../../hooks/useNavbar";
import { MODAL_TYPE } from "../../../shared/types";

const Navbar = () => {
  const navigate = useNavigate();
  const { signOut, authUser, cartCount } = useAuth();
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

  useEffect(() => {
    // window.addEventListener("resize", handleWindowSize);
    const loader = document.querySelector(
      ".appLoaderContainer"
    ) as HTMLDivElement;
    if (loader) {
      loader.style.display = "none";
    }
    // return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

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
