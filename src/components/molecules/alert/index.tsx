import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { alertMessageState } from "../../../shared/recoil/atom";
import { MessageTypeEnum } from "../../../shared/types";
import { successToast, failedToast } from "./constant";

const Alert = () => {
  const [alertMessage, setAlertMessage] = useRecoilState(alertMessageState);

  useEffect(() => {
    let timerId: number;
    if (alertMessage) {
      // @ts-ignore
      timerId = setTimeout(() => setAlertMessage(null), 3000);
    }
    return () => clearTimeout(timerId);
  }, [alertMessage]);

  return (
    <>
      {alertMessage && (
        <div
          className={
            alertMessage.type === MessageTypeEnum.SUCCESS
              ? successToast
              : failedToast
          }
        >
          {alertMessage.message}
        </div>
      )}
    </>
  );
};

export default Alert;
