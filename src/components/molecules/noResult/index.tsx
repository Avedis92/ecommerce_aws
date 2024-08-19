import { ImSad } from "react-icons/im";
import { INoResultProps } from "./types";

const NoResult = ({ text }: INoResultProps) => {
  return (
    <div className="text-center">
      <h1 className="my-5 mx-0 h1-custom-basic">{text}</h1>
      <ImSad size="2rem" />
    </div>
  );
};
export default NoResult;
