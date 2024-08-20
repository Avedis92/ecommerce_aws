import { ILoaderProps } from "./types";

const Loader = ({ text }: ILoaderProps) => {
  return (
    <div className="bg-white absolute z-50 inset-0 flex flex-col justify-center items-center">
      <div
        className="border-[#e6e6e6] border-solid border-16 border-t-16  border-t-[#3498db] w-24 h-24 
      rounded-full animate-spinner"
      ></div>
      <p>{text}</p>
    </div>
  );
};

export default Loader;
