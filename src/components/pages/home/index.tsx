import { useRecoilValue } from "recoil";
import { getHomePageProductsSelector } from "../../../shared/recoil/selector";
import { CategoryEnum } from "../../../shared/types";
import HomeCollection from "../../organisms/homeCollection";
import { extractSpecificProduct } from "./helper";

const Home = () => {
  const products = useRecoilValue(getHomePageProductsSelector);

  return (
    <>
      <HomeCollection
        title="Popular for pants"
        products={extractSpecificProduct(products, CategoryEnum.PANTS)}
      />

      <HomeCollection
        title="Popular for shirts"
        products={extractSpecificProduct(products, CategoryEnum.SHIRTS)}
      />

      <HomeCollection
        title="Popular for shoes"
        products={extractSpecificProduct(products, CategoryEnum.SHOES)}
      />
    </>
  );
};

export default Home;
