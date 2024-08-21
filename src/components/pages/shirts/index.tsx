import { useRecoilValue } from "recoil";
import {
  getProductsByCategorySelector,
  imageUrlSelectorFamily,
} from "../../../shared/recoil/selector";
import { CategoryEnum } from "../../../shared/types";
import SalesBanner from "../../atoms/salesBanner";
import HomeCollection from "../../organisms/homeCollection";
// import shirtsSale from "../../../assets/clothing_sale.jpg";

const Shirts = () => {
  const shirtsProducts = useRecoilValue(
    getProductsByCategorySelector([CategoryEnum.SHIRTS])
  );
  const bannerUrl = useRecoilValue(imageUrlSelectorFamily(CategoryEnum.SHIRTS));

  return (
    <div className="my-8 mx-12">
      <SalesBanner source={bannerUrl} />
      <HomeCollection products={shirtsProducts} />
    </div>
  );
};

export default Shirts;
