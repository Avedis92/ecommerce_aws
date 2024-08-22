import { useState } from "react";
import Field from "../../organisms/field";
import { validateEmailVerificationForm } from "./helper";
import { initialError, initialForm } from "./constant";
import useAuth from "../../../hooks/useAuth";

const VerifyEmailModal = () => {
  const [emailVerificationForm, setEmailVerificationForm] =
    useState(initialForm);
  const [emailVerificationFormError, setEmailVerificationFormError] =
    useState(initialError);
  const { verifyEmail } = useAuth();

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
      verifyEmail(emailVerificationForm.code);
    }
  };
  return (
    <div className="text-center">
      <h1 className="mt-0 mb-5 h1-custom-basic">Verify your email</h1>
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
