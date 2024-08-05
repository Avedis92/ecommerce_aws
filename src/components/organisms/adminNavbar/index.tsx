import NavLeftContent from "../../molecules/navLeftContent";
import useAuth from "../../../hooks/useAuth";
import UserSettings from "../../molecules/userSettings";
import useNavbar from "../../../hooks/useNavbar";

const AdminNavbar = () => {
  const { authUser, signOut } = useAuth();
  const { pathname } = useNavbar();

  return (
    <nav className="flex justify-between items-center py-0 px-8 bg-white">
      <NavLeftContent title="Men's Wear" subtitle="Admin panel" />
      {authUser && (
        <UserSettings
          authUserExtraInfo={authUser}
          pathname={pathname}
          handleSignOut={signOut}
        />
      )}
    </nav>
  );
};

export default AdminNavbar;
