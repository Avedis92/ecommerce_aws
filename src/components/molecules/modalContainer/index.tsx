import { createPortal } from "react-dom";
import ModalContent from "../modalContent";

const htmlModalContainer = document.getElementById("modal");

const Modal = () => {
  return createPortal(<ModalContent />, htmlModalContainer!);
};
export default Modal;
