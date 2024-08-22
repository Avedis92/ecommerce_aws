import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import useNavbar from "../../../hooks/useNavbar";
import useAuth from "../../../hooks/useAuth";
import { NavItemEnum, MODAL_TYPE } from "../../../shared/types";
import { getItemsStyles } from "./helper";

const HamburgerMenu = () => {
  const {
    handlePantsContent,
    handleShirtsContent,
    handleShoesContent,
    handleShopContent,
    showModal,
    selectedNav,
    isMenuShown,
    setIsMenuShown,
  } = useNavbar();
  const navigate = useNavigate();
  const { authUser, signOut } = useAuth();

  const handleOpenBurgerMenu = () => {
    setIsMenuShown(!isMenuShown);
  };

  const handleCartContent = () => {
    setIsMenuShown(false);
    if (authUser) {
      navigate("/cart");
    } else {
      showModal(MODAL_TYPE.DENIED_ACCESS);
    }
  };

  const navigateToAdminPage = () => {
    navigate("/admin");
    setIsMenuShown(false);
  };

  const handleSignIn = () => {
    navigate("/signIn");
    setIsMenuShown(false);
  };

  const handleSignOut = () => {
    handleOpenBurgerMenu();
    signOut();
  };

  return (
    <div className="relative">
      <GiHamburgerMenu
        size="3rem"
        onClick={handleOpenBurgerMenu}
        cursor="pointer"
      />
      {isMenuShown && (
        <ul className="absolute z-10 top-12 right-2 bg-white p-0 m-0 list-none w-60">
          {authUser ? (
            <li onClick={handleSignOut} className="hamburger-menuItem">
              Sign Out
            </li>
          ) : (
            <li onClick={handleSignIn} className="hamburger-menuItem">
              Sign In
            </li>
          )}
          {authUser && authUser.isAdmin && (
            <li onClick={navigateToAdminPage} className="hamburger-menuItem">
              Admin page
            </li>
          )}
          <li
            className={getItemsStyles(selectedNav === NavItemEnum.SHOP)}
            onClick={handleShopContent}
          >
            {NavItemEnum.SHOP}
          </li>
          <li
            className={getItemsStyles(selectedNav === NavItemEnum.PANTS)}
            onClick={handlePantsContent}
          >
            {NavItemEnum.PANTS}
          </li>
          <li
            className={getItemsStyles(selectedNav === NavItemEnum.SHIRTS)}
            onClick={handleShirtsContent}
          >
            {NavItemEnum.SHIRTS}
          </li>
          <li
            className={getItemsStyles(selectedNav === NavItemEnum.SHOES)}
            onClick={handleShoesContent}
          >
            {NavItemEnum.SHOES}
          </li>
          <li
            className={getItemsStyles(selectedNav === NavItemEnum.CARTS)}
            onClick={handleCartContent}
          >
            {NavItemEnum.CARTS}
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
