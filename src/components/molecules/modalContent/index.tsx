import { useRecoilValue } from "recoil";
import { isModalShownState, modalTypeState } from "../../../shared/recoil/atom";
import SignUpModal from "../signUpModal";
import SignInModal from "../signInModal";
import VerifyEmailModal from "../emailVerificationModal";
import AccessDeniedModal from "../deniedAccessModal";
import SignOutModal from "../signOutModal";
import { MODAL_TYPE } from "../../../shared/types";

const ModalContent = () => {
  const isModalShown = useRecoilValue(isModalShownState);
  const modalType = useRecoilValue(modalTypeState);

  const displayModalContent = () => {
    switch (modalType) {
      case MODAL_TYPE.SIGNUP:
        return <SignUpModal />;
      case MODAL_TYPE.SIGNIN:
        return <SignInModal />;
      case MODAL_TYPE.EMAIL_VERIFICATION:
        return <VerifyEmailModal />;
      case MODAL_TYPE.SIGNOUT:
        return <SignOutModal />;
      case MODAL_TYPE.DENIED_ACCESS:
        return <AccessDeniedModal />;
      default:
        break;
    }
  };

  return (
    <>
      {isModalShown && (
        <div
          className="fixed inset-0 flex justify-center 
          items-center isolate
          after:content-[''] after:fixed after:inset-0 after:bg-black
          after:opacity-40 after:w-full after:h-full after:-z-10"
        >
          <div className="bg-white rounded-xl py-4 px-8">
            {displayModalContent()}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalContent;
