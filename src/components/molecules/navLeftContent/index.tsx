import { RiShoppingBag3Fill } from "react-icons/ri";
import { INavLeftContentProps } from "./types";

const NavLeftContent = ({ title, subtitle }: INavLeftContentProps) => {
  return (
    <div className="flex">
      <RiShoppingBag3Fill color="red" size="4rem" />
      <div className="flex flex-col justify-center ml-5">
        <span className="block font-bold text-3xl">{title}</span>
        {subtitle && (
          <span className="block text-red-600 font-bold">{subtitle}</span>
        )}
      </div>
    </div>
  );
};
export default NavLeftContent;
