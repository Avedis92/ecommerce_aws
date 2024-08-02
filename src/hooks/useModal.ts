import { useSetRecoilState } from "recoil";

import { modalTypeState, isModalShownState } from "../shared/recoil/atom";
import { MODAL_TYPE } from "../shared/types";

const useModal = () => {
  const setModalType = useSetRecoilState(modalTypeState);
  const setIsShownModal = useSetRecoilState(isModalShownState);
  const showModal = (modalType: MODAL_TYPE) => {
    setModalType(modalType);
    setIsShownModal(true);
  };
  const removeModal = () => {
    setIsShownModal(false);
    setModalType(null);
  };
  return { showModal, removeModal };
};
export default useModal;
