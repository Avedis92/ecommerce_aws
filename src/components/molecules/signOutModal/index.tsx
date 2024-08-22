import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import {
  userCartCountState,
  cartState,
  authUserState,
} from "../../../shared/recoil/atom";
import { useNavigate } from "react-router-dom";
import useModal from "../../../hooks/useModal";

const SignOutModal = () => {
  const { removeModal } = useModal();
  const navigate = useNavigate();
  const setAuthUser = useSetRecoilState(authUserState);
  const setCart = useSetRecoilState(cartState);
  const setCartCount = useSetRecoilState(userCartCountState);

  useEffect(() => {
    let timerId;
    // eslint-disable-next-line prefer-const
    timerId = setTimeout(() => {
      removeModal();
      setAuthUser(null);
      setCart(null);
      setCartCount(0);
      navigate("/");
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="text-center">
      <h1 className="mt-0 mb-5 h1-custom-basic">
        You have successfully signed out
      </h1>
    </div>
  );
};
export default SignOutModal;
