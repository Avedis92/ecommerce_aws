import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { NavItemEnum } from "../shared/types";
import { selectedNavState, menuShownState } from "../shared/recoil/atom";
import useAlert from "./useAlert";
import useModal from "./useModal";

const useNavbar = () => {
  const [selectedNav, setSelectedNav] = useRecoilState(selectedNavState);
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

  return {
    handleShopContent,
    handlePantsContent,
    handleShirtsContent,
    handleShoesContent,
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
