import { useRecoilValue } from "recoil";
import { getProductsByCategorySelector } from "../../../shared/recoil/selector";
import { CategoryEnum } from "../../../shared/types";
import SalesBanner from "../../atoms/salesBanner";
import HomeCollection from "../../organisms/homeCollection";
import shoesSale from "../../../assets/shoes_sale.png";

const Shoes = () => {
  const shoesProducts = useRecoilValue(
    getProductsByCategorySelector([CategoryEnum.SHOES])
  );

  return (
    <div className="my-8 mx-12">
      <SalesBanner source={shoesSale} />
      <HomeCollection products={shoesProducts} />
    </div>
  );
};

export default Shoes;
