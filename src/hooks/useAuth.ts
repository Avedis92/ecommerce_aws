import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import { authUserState, signUpUserState } from "../shared/recoil/atom";
import { userPool as Pool } from "../shared/config";
import { MODAL_TYPE, ISignUpUser } from "../shared/types";
import { createAuthUser } from "../shared/helpers";
import useModal from "./useModal";
import useAlert from "./useAlert";

const useAuth = () => {
  const { showErrorMessage } = useAlert();
  const { showModal } = useModal();
  const [authUser, setAuthUser] = useRecoilState(authUserState);
  const [signUpUser, setSignUpUser] = useRecoilState(signUpUserState);

  const authenticateUser = (email: string, password: string) => {
    const userData = {
      Username: email,
      Pool,
    };
    const cognitoUser = new CognitoUser(userData);
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    cognitoUser.authenticateUser(authDetails, {
      onSuccess: () => {
        showModal(MODAL_TYPE.SIGNIN);
        cognitoUser.getUserAttributes((err, data) => {
          if (err) {
            showErrorMessage(err.message);
            return;
          }
          setAuthUser(createAuthUser(data!));
        });
      },
      onFailure: () => {
        showErrorMessage("User was not successfully signed in");
      },
    });
  };
  const signUp = (
    email: string,
    password: string,
    extraAttributes: CognitoUserAttribute[]
  ) => {
    Pool.signUp(email, password, extraAttributes, [], (err, data) => {
      if (err) {
        showErrorMessage("User was not successfully signed Up");
        console.error(err);
      } else {
        showModal(MODAL_TYPE.EMAIL_VERIFICATION);
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
    });
  };
  const verifyEmail = (code: string) => {
    const userData = {
      Username: signUpUser?.user.username as string,
      Pool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(code, true, (err) => {
      if (err) {
        showErrorMessage("User email was not successfully verified");
        console.error(err);
      } else {
        showModal(MODAL_TYPE.SIGNUP);
        setSignUpUser({
          user: { ...signUpUser?.user, userConfirmed: true },
        } as ISignUpUser);
      }
    });
  };

  const signOut = () => {
    const userData = {
      Username: authUser?.username as string,
      Pool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.signOut();
  };

  useEffect(() => {
    if (!authUser) {
      const cognitoUser = Pool.getCurrentUser();
      if (cognitoUser) {
        cognitoUser.getUserAttributes((err, data) => {
          if (err) {
            showErrorMessage(err.message);
            return;
          }
          setAuthUser(createAuthUser(data!));
        });
      }
    }
  }, []);
  return { authenticateUser, signUp, verifyEmail, signOut, authUser };
};

export default useAuth;
