import { useNavigate } from "react-router-dom";
import useModal from "../../../hooks/useModal";

const SignUpModal = () => {
  const { removeModal } = useModal();
  const navigate = useNavigate();

  const handleGoPage = () => {
    removeModal();
    navigate("/");
  };
  return (
    <div className="text-center">
      <h1 className="mt-0 mb-5 h1-custom-basic">
        You have successfully signed up
      </h1>
      <button
        className="border-none bg-red-600 text-white
        text-xl font-bold py-4 px-2 cursor-pointer
        transform transition duration-200 ease-in-out
        hover:scale-105 active:scale-90"
        onClick={handleGoPage}
      >
        Go back to home page and sign in
      </button>
    </div>
  );
};
export default SignUpModal;
