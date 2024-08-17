import { ILoaderProps } from "./types";

const Loader = ({ text }: ILoaderProps) => {
  return (
    <div className="bg-white absolute z-50 inset-0 flex flex-col justify-center items-center">
      <div
        className="border-spacing-4 border-solid border-[#e6e6e6] w-24 h-24 
      rounded-full border-t-[#3498db] border-t-16 animate-spinner"
      ></div>
      <p>{text}</p>
    </div>
  );
};

export default Loader;
