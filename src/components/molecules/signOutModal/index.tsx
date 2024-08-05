import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useModal from "../../../hooks/useModal";

const SignOutModal = () => {
  const { removeModal } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    let timerId;
    // eslint-disable-next-line prefer-const
    timerId = setTimeout(() => {
      removeModal();
      navigate("/");
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="text-center">
      <h1 className="mt-0 mb-5">You have successfully signed out</h1>
    </div>
  );
};
export default SignOutModal;
