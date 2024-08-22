import { ISalesBannerProp } from "./types";

const SalesBanner = ({ source }: ISalesBannerProp) => {
  return (
    <div className="h-100 w-full mb-16 sm-550:h-fit">
      <img
        src={source}
        className="w-full h-full object-fill object-center sm-550:object-cover sm-550:object-left sm-550:h-60"
      />
    </div>
  );
};

export default SalesBanner;
