import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const ErrorComponent = () => {
  return (
    <div className="inset-0 flex justify-center items-center bg-white">
      <div className="text-center">
        <HiOutlineQuestionMarkCircle size="4rem" />
        <p>Something went wrong. Please refresh the page.</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
