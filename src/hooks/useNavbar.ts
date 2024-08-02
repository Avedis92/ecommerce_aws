import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { NavItemEnum } from "../shared/types";
import { selectedNavState, menuShownState } from "../shared/recoil/atom";
/* import { auth } from "../shared/firebaseConfig";
import { signOut } from "firebase/auth"; */
import useAlert from "./useAlert";
import useModal from "./useModal";

const useNavbar = () => {
  const [selectedNav, setSelectedNav] = useRecoilState(selectedNavState);
  // const setCartCount = useSetRecoilState(userCartCountState);
  const [isMenuShown, setIsMenuShown] = useRecoilState(menuShownState);
  const navigate = useNavigate();
  const { showModal } = useModal();
  const { showErrorMessage } = useAlert();
  const { pathname } = useLocation();

  const handleShopContent = () => {
    setSelectedNav(NavItemEnum.SHOP);
    setIsMenuShown(false);
    navigate("/");
  };

  const handlePantsContent = () => {
    setSelectedNav(NavItemEnum.PANTS);
    setIsMenuShown(false);
    navigate("/pants");
  };

  const handleShirtsContent = () => {
    setSelectedNav(NavItemEnum.SHIRTS);
    setIsMenuShown(false);
    navigate("/shirts");
  };

  const handleShoesContent = () => {
    setSelectedNav(NavItemEnum.SHOES);
    setIsMenuShown(false);
    navigate("/shoes");
  };

  /* const handleSignOut = async () => {
    try {
      await signOut(auth);
      showModal(MODAL_TYPE.SIGNOUT);
      if (!pathname.includes("admin")) {
        setCartCount(0);
      }
    } catch (e) {
      showErrorMessage("User was not successfully signed out");
    } finally {
      setIsMenuShown(false);
    }
  }; */

  return {
    handleShopContent,
    handlePantsContent,
    handleShirtsContent,
    handleShoesContent,
    // handleSignOut,
    showErrorMessage,
    showModal,
    setSelectedNav,
    setIsMenuShown,
    isMenuShown,
    selectedNav,
    pathname,
  };
};

export default useNavbar;
