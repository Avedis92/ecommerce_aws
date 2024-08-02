import { NavItemEnum } from "../../../../shared/types";
import useNavbar from "../../../../hooks/useNavbar";
import { activeNav, nonActiveNav } from "./constant";

const ProductNavigator = () => {
  const {
    handlePantsContent,
    handleShirtsContent,
    handleShoesContent,
    handleShopContent,
    selectedNav,
  } = useNavbar();

  return (
    <ul className="list-none flex items-center p-0 gap-x-8">
      <li
        className={selectedNav === NavItemEnum.SHOP ? activeNav : nonActiveNav}
        onClick={handleShopContent}
      >
        {NavItemEnum.SHOP}
      </li>
      <li
        className={selectedNav === NavItemEnum.PANTS ? activeNav : nonActiveNav}
        onClick={handlePantsContent}
      >
        {NavItemEnum.PANTS}
      </li>
      <li
        className={
          selectedNav === NavItemEnum.SHIRTS ? activeNav : nonActiveNav
        }
        onClick={handleShirtsContent}
      >
        {NavItemEnum.SHIRTS}
      </li>
      <li
        className={selectedNav === NavItemEnum.SHOES ? activeNav : nonActiveNav}
        onClick={handleShoesContent}
      >
        {NavItemEnum.SHOES}
      </li>
    </ul>
  );
};

export default ProductNavigator;
