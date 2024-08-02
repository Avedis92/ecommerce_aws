import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Field from "../../organisms/field";
import AuthContainer from "../../molecules/authContainer";
import { initialForm, initialError } from "./constant";
import { validateSignInForm } from "./helper";
import { allFieldsAreEmpty } from "../../../shared/helpers";
/* import { validateSignInForm } from "./helpers";
import { allFieldsAreEmpty } from "../../../shared/helpers";
import useAlert from "../../../hooks/useAlert";
import useModal from "../../../hooks/useModal"; */
import { MODAL_TYPE } from "../../../shared/types";
import useModal from "../../../hooks/useModal";

const SignIn = () => {
  const [signInForm, setSignInForm] = useState(initialForm);
  const [errorForm, setErrorForm] = useState(initialError);
  /* const { showErrorMessage } = useAlert(); */
  const { showModal } = useModal();
  const navigate = useNavigate();

  const handleEmailChange = (email: string) => {
    setSignInForm({
      ...signInForm,
      email,
    });
  };
  const handlePasswordChange = (password: string) => {
    setSignInForm({
      ...signInForm,
      password,
    });
  };
  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorFields = validateSignInForm(signInForm, initialError);
    if (!allFieldsAreEmpty(errorFields)) {
      setErrorForm(errorFields);
      return;
    } else {
      showModal(MODAL_TYPE.SIGNIN);
      setSignInForm(initialForm);
      setErrorForm(initialError);
      /* try {
        await signInWithEmailAndPassword(
          auth,
          signInForm.email,
          signInForm.password
        );
        showModal(MODAL_TYPE.SIGNIN);
        setSignInForm(initialForm);
        setErrorForm(initialError);
      } catch (e) {
        showErrorMessage("User was not successfully signed in");
      } */
    }
  };

  const navigateToSignUp = () => {
    navigate("/signUp");
  };

  return (
    <AuthContainer
      title="Sign In"
      subButtonContent="Don't have an account"
      alternativeAuth="Sign Up"
      onClick={navigateToSignUp}
    >
      <form>
        <Field
          labelName="Email"
          type="text"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={signInForm.email}
          error={errorForm.emailError}
        />
        <Field
          labelName="Password"
          type="password"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          value={signInForm.password}
          error={errorForm.passwordError}
        />
        <button
          className="w-full bg-red-500 py-5 px-0 border-none
          cursor-pointer text-base font-bold text-white
          transform transition duration-200 ease-out 
          hover:scale-105 active:scale-90"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </form>
    </AuthContainer>
  );
};

export default SignIn;
