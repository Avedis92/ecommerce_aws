import { useRecoilValue } from "recoil";
import { getProductsByCategorySelector } from "../../../shared/recoil/selector";
import { CategoryEnum } from "../../../shared/types";
import SalesBanner from "../../atoms/salesBanner";
import HomeCollection from "../../organisms/homeCollection";
import shirtsSale from "../../../assets/clothing_sale.jpg";

const Shirts = () => {
  const shirtsProducts = useRecoilValue(
    getProductsByCategorySelector([CategoryEnum.SHIRTS])
  );

  return (
    <div className="my-8 mx-12">
      <SalesBanner source={shirtsSale} />
      <HomeCollection products={shirtsProducts} />
    </div>
  );
};

export default Shirts;
