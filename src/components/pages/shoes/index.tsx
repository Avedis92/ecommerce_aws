import { useRecoilValue } from "recoil";
import {
  getProductsByCategorySelector,
  imageUrlSelectorFamily,
} from "../../../shared/recoil/selector";
import { CategoryEnum } from "../../../shared/types";
import SalesBanner from "../../atoms/salesBanner";
import HomeCollection from "../../organisms/homeCollection";

const Shoes = () => {
  const shoesProducts = useRecoilValue(
    getProductsByCategorySelector([CategoryEnum.SHOES])
  );
  const bannerUrl = useRecoilValue(imageUrlSelectorFamily(CategoryEnum.SHOES));

  return (
    <div className="my-8 mx-12">
      <SalesBanner source={bannerUrl} />
      <HomeCollection products={shoesProducts} />
    </div>
  );
};

export default Shoes;
