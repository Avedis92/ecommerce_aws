import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { signUpUserState } from "../../../shared/recoil/atom";
import AuthContainer from "../../molecules/authContainer";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import Field from "../../organisms/field";
import { initialError, initialForm } from "./constant";
import useAlert from "../../../hooks/useAlert";
import { allFieldsAreEmpty } from "../../../shared/helpers";
import { validateSignUpForm } from "./helper";
import useModal from "../../../hooks/useModal";
import { MODAL_TYPE } from "../../../shared/types";
import { userPool } from "../../../shared/config";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useState(initialForm);
  const [errorForm, setErrorForm] = useState(initialError);
  const { showErrorMessage } = useAlert();
  const { showModal } = useModal();
  const setSignUpUser = useSetRecoilState(signUpUserState);

  const handleEmailChange = (email: string) => {
    setSignUpForm({
      ...signUpForm,
      email,
    });
  };
  const handlePasswordChange = (password: string) => {
    setSignUpForm({
      ...signUpForm,
      password,
    });
  };
  const handleConfirmPasswordChange = (confirmPassword: string) => {
    setSignUpForm({
      ...signUpForm,
      confirmPassword,
    });
  };
  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorFields = validateSignUpForm(signUpForm, initialError);
    if (!allFieldsAreEmpty(errorFields)) {
      setErrorForm(errorFields);
      return;
    } else {
      const extraAttributes = [
        new CognitoUserAttribute({
          Name: "custom:isAdmin",
          Value: "0",
        }),
      ];
      userPool.signUp(
        signUpForm.email,
        signUpForm.password,
        extraAttributes,
        [],
        (err, data) => {
          if (err) {
            showErrorMessage("User was not successfully signed Up");
            console.error(err);
          } else {
            showModal(MODAL_TYPE.EMAIL_VERIFICATION);
            setSignUpForm(initialForm);
            setErrorForm(initialError);
            const signUpUser = {
              user: {
                // @ts-ignore
                username: data?.user.username,
                userSub: data?.userSub as string,
                userConfirmed: data?.userConfirmed as boolean,
              },
            };
            setSignUpUser(signUpUser);
          }
        }
      );
    }
  };

  const navigateToSignIn = () => {
    navigate("/signIn");
  };
  return (
    <AuthContainer
      title="Sign Up"
      subButtonContent="Already have an account?"
      alternativeAuth="Sign In"
      onClick={navigateToSignIn}
    >
      <form>
        <Field
          labelName="Email"
          type="text"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={signUpForm.email}
          error={errorForm.emailError}
        />
        <Field
          labelName="Password"
          type="password"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          value={signUpForm.password}
          error={errorForm.passwordError}
        />
        <Field
          labelName="Confirm password"
          type="password"
          placeholder="Enter confirm password"
          onChange={handleConfirmPasswordChange}
          value={signUpForm.confirmPassword}
          error={errorForm.confirmPasswordError}
        />
        <button
          className="w-full bg-red-500 py-5 px-0 border-none
          cursor-pointer text-base font-bold text-white
          transform transition duration-200 ease-out 
          hover:scale-105 active:scale-90"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
    </AuthContainer>
  );
};
export default SignUp;
