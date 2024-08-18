import { useNavigate } from "react-router-dom";
import useModal from "../../../hooks/useModal";

const AccessDeniedModal = () => {
  const { removeModal } = useModal();
  const navigate = useNavigate();

  const handleConfirmation = () => {
    removeModal();
    navigate("/");
  };

  return (
    <div className="text-center">
      <h1 className="h1-custom-basic mt-0 mb-5">
        You need to sign in to have access to this content
      </h1>
      <button
        className="py-4 px-2 w-24 bg-cyan-500 text-white font-bold 
          cursor-pointer text-xl border-none rounded-xl"
        onClick={handleConfirmation}
      >
        Confirm
      </button>
    </div>
  );
};
export default AccessDeniedModal;
