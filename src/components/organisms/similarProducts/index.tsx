import { useRecoilValue } from "recoil";
import { getProductsByCategorySelector } from "../../../shared/recoil/selector";
import CollectionCart from "../../molecules/collectionCart";
import { ISimilarProductsProps } from "./types";

const SimilarProducts = ({ category }: ISimilarProductsProps) => {
  const similarProducts = useRecoilValue(
    getProductsByCategorySelector([category, "8"])
  );

  return (
    <div className="mb-12">
      <h1 className="h1-custom-basic ml-8 mb-4 underline">Similar products:</h1>
      <div className="grid grid-cols-auto-fit-minmax-300 justify-items-center gap-y-8 text-center">
        {similarProducts.map((sp) => (
          <CollectionCart key={sp.id} {...sp} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
