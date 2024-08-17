import { useRecoilValue } from "recoil";
import { getProductsByCategorySelector } from "../../../shared/recoil/selector";
import { CategoryEnum } from "../../../shared/types";
import SalesBanner from "../../atoms/salesBanner";
import HomeCollection from "../../organisms/homeCollection";
import pantsSale from "../../../assets/pants_sales.webp";

const Pants = () => {
  const pantsProducts = useRecoilValue(
    getProductsByCategorySelector([CategoryEnum.PANTS])
  );

  return (
    <div className="my-8 mx-12">
      <SalesBanner source={pantsSale} />
      <HomeCollection products={pantsProducts} />
    </div>
  );
};

export default Pants;
