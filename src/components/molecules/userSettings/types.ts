import { IAuthUser } from "../../../shared/types";

export interface IUserSettingsProps {
  authUserExtraInfo: IAuthUser;
  pathname: string;
  handleSignOut: () => void;
}
