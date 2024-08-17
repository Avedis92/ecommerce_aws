import { useParams } from "react-router-dom";
import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { getSpecificProductSelector } from "../../../shared/recoil/selector";
import ProductDetail from "../../organisms/productDetail";
import SimilarProducts from "../../organisms/similarProducts";
import { CategoryEnum } from "../../../shared/types";
import Loader from "../../molecules/loader";

const ProductPage = () => {
  const { productId } = useParams();
  const product = useRecoilValue(
    getSpecificProductSelector(productId as string)
  );

  return (
    <div>
      <ProductDetail {...product} id={productId} />
      <Suspense fallback={<Loader text="Loading similar products..." />}>
        <SimilarProducts category={product.category as CategoryEnum} />
      </Suspense>
    </div>
  );
};

export default ProductPage;
