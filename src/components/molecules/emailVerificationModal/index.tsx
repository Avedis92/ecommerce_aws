import { useState } from "react";
import { useRecoilState } from "recoil";
import { CognitoUser } from "amazon-cognito-identity-js";
import { signUpUserState } from "../../../shared/recoil/atom";
import useModal from "../../../hooks/useModal";
import useAlert from "../../../hooks/useAlert";
import Field from "../../organisms/field";
import { validateEmailVerificationForm } from "./helper";
import { initialError, initialForm } from "./constant";
import { userPool } from "../../../shared/config";
import { MODAL_TYPE, ISignUpUser } from "../../../shared/types";

const VerifyEmailModal = () => {
  const { showModal } = useModal();
  const [emailVerificationForm, setEmailVerificationForm] =
    useState(initialForm);
  const [emailVerificationFormError, setEmailVerificationFormError] =
    useState(initialError);
  const [signUpUser, setSignUpUser] = useRecoilState(signUpUserState);
  const { showErrorMessage } = useAlert();

  const handleCode = (code: string) => {
    setEmailVerificationForm({
      ...emailVerificationForm,
      code,
    });
  };
  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorFields = validateEmailVerificationForm(
      emailVerificationForm,
      initialError
    );
    if (errorFields.codeError) {
      setEmailVerificationFormError(errorFields);
      return;
    } else {
      const userData = {
        Username: signUpUser?.user.username as string,
        Pool: userPool,
      };
      const cognitoUser = new CognitoUser(userData);
      cognitoUser.confirmRegistration(
        emailVerificationForm.code,
        true,
        (err) => {
          if (err) {
            showErrorMessage("User email was not successfully verified");
            console.error(err);
          } else {
            showModal(MODAL_TYPE.SIGNUP);
            setSignUpUser({
              user: { ...signUpUser?.user, userConfirmed: true },
            } as ISignUpUser);
          }
        }
      );
    }
  };
  return (
    <div className="text-center">
      <h1 className="mt-0 mb-5">Verify your email</h1>
      <Field
        labelName="Confirm password"
        type="text"
        placeholder="Enter confirm password"
        onChange={handleCode}
        value={emailVerificationForm.code}
        error={emailVerificationFormError.codeError}
      />
      <button
        className="w-full bg-red-500 py-5 px-0 border-none
          cursor-pointer text-base font-bold text-white
          transform transition duration-200 ease-out 
          hover:scale-105 active:scale-90"
        onClick={handleSubmit}
      >
        Verify Email
      </button>
    </div>
  );
};
export default VerifyEmailModal;
