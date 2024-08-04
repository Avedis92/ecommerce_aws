import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { IUserSettingsProps } from "./types";

const UserSettings = ({
  authUserExtraInfo,
  pathname,
  handleSignOut,
}: IUserSettingsProps) => {
  const [isUserSettingsShown, setIsUserSettingsShown] = useState(false);
  const navigate = useNavigate();

  const navigateToAdminPage = () => {
    navigate("/admin");
  };

  return (
    <div className="flex items-center justify-center relative">
      <span className="font-bold text-xl">{authUserExtraInfo.profileName}</span>
      <TiArrowSortedDown
        size="2rem"
        cursor="pointer"
        className={isUserSettingsShown ? "rotate-0" : "-rotate-180"}
        onClick={() => {
          setIsUserSettingsShown((isUserSettingsShown) => !isUserSettingsShown);
        }}
      />
      {isUserSettingsShown && (
        <ul className="absolute top-8 list-none bg-white p-0 m-0 w-32">
          <li
            className="font-bold text-xl cursor-pointer pb-3 hover:bg-red-600 hover:text-white"
            onClick={handleSignOut}
          >
            Sign out
          </li>
          {authUserExtraInfo.isAdmin && !pathname.includes("admin") && (
            <li
              className="font-bold text-xl cursor-pointer pb-3 hover:bg-red-600 hover:text-white"
              onClick={navigateToAdminPage}
            >
              Admin page
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default UserSettings;
