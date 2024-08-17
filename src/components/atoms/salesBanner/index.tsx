import { ISalesBannerProp } from "./types";

const SalesBanner = ({ source }: ISalesBannerProp) => {
  return (
    <div className="h-100 w-full mb-16">
      <img src={source} className="w-full h-full object-fill object-center" />
    </div>
  );
};

export default SalesBanner;
