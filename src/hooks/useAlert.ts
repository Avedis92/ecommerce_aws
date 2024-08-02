import { useSetRecoilState } from "recoil";
import { alertMessageState } from "../shared/recoil/atom";
import { MessageTypeEnum } from "../shared/types";

const useAlert = () => {
  const setAlertMessage = useSetRecoilState(alertMessageState);

  const showSuccessMessage = (message: string) => {
    setAlertMessage({ type: MessageTypeEnum.SUCCESS, message });
  };
  const showErrorMessage = (message: string) => {
    setAlertMessage({ type: MessageTypeEnum.ERROR, message });
  };

  return { showErrorMessage, showSuccessMessage };
};

export default useAlert;
