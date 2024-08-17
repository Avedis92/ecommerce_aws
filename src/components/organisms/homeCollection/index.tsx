import { useState, useEffect } from "react";
import { IHomeCollectionProps } from "./types";
import CollectionCart from "../../molecules/collectionCart";
import Loader from "../../molecules/loader";

const HomeCollection = ({ title, products }: IHomeCollectionProps) => {
  const [areProductsLoaded, setAreProductsLoaded] = useState(false);

  useEffect(() => {
    if (products.length) {
      setAreProductsLoaded(true);
    }
  }, [products]);

  return (
    <>
      {areProductsLoaded ? (
        <div className="text-center mb-16">
          {title && (
            <h1 className="underline text-3xl font-bold mb-4">{title}</h1>
          )}
          <div className="grid grid-cols-auto-fit-minmax-300 justify-items-center gap-y-8">
            {products.length > 0 &&
              products.map((p) => <CollectionCart key={p.id} {...p} />)}
          </div>
        </div>
      ) : (
        <Loader text={`Loading ${title}`} />
      )}
    </>
  );
};

export default HomeCollection;
