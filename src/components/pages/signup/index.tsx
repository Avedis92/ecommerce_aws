import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../../molecules/authContainer";
import Field from "../../organisms/field";
import { initialError, initialForm } from "./constant";
// import useAlert from "../../../hooks/useAlert";
import { allFieldsAreEmpty } from "../../../shared/helpers";
import { validateSignUpForm } from "./helper";
import useModal from "../../../hooks/useModal";
import { MODAL_TYPE } from "../../../shared/types";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useState(initialForm);
  const [errorForm, setErrorForm] = useState(initialError);
  // const { showErrorMessage } = useAlert();
  const { showModal } = useModal();

  const handleUsernameChange = (username: string) => {
    setSignUpForm({
      ...signUpForm,
      username,
    });
  };
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorFields = validateSignUpForm(signUpForm, initialError);
    if (!allFieldsAreEmpty(errorFields)) {
      setErrorForm(errorFields);
      return;
    } else {
      showModal(MODAL_TYPE.SIGNUP);
      setSignUpForm(initialForm);
      setErrorForm(initialError);
      /* try {
        const credentials = await createUserWithEmailAndPassword(
          auth,
          signUpForm.email,
          signUpForm.password
        );
        const authUserDocRef = doc(
          db,
          CollectionEnum.USERS,
          credentials.user.uid
        );
        await setDoc(authUserDocRef, {
          username: signUpForm.username,
          isAdmin: false,
        });
        showModal(MODAL_TYPE.SIGNUP);
        setSignUpForm(initialForm);
        setErrorForm(initialError);
      } catch (e) {
        showErrorMessage("User was not successfully signed Up");
      } */
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
          labelName="Username"
          type="text"
          placeholder="Enter username"
          onChange={handleUsernameChange}
          value={signUpForm.username}
          error={errorForm.usernameError}
        />
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
