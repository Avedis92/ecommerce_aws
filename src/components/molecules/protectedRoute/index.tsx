import { useLocation, Outlet, Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const ProtectedRoute = () => {
  const location = useLocation();
  const { authUser } = useAuth();
  if (location.pathname.includes("admin")) {
    return (
      <>{authUser && authUser.isAdmin ? <Outlet /> : <Navigate to="/" />}</>
    );
  }
  return <>{authUser ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedRoute;
