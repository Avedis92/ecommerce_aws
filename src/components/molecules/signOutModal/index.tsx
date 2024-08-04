import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import useModal from "../../../hooks/useModal";

const SignOutModal = () => {
  const { signOutModalContainer } = styles;
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
    <div className={signOutModalContainer}>
      <h1>You have successfully signed out</h1>
    </div>
  );
};
export default SignOutModal;
