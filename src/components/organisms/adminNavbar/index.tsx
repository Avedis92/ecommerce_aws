import NavLeftContent from "../../molecules/navLeftContent";
import styles from "./style.module.css";
import useAuth from "../../../hooks/useAuth";
import UserSettings from "../../molecules/userSettings";
import useNavbar from "../../../hooks/useNavbar";

const AdminNavbar = () => {
  const { container } = styles;
  const { authUser, signOut } = useAuth();
  const { pathname } = useNavbar();

  return (
    <nav className={container}>
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
