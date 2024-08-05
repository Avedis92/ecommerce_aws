import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/home";
import Navbar from "./components/organisms/navbar";
import AdminNavbar from "./components/organisms/adminNavbar";
import Modal from "./components/molecules/modalContainer";
import SignIn from "./components/pages/signin";
import SignUp from "./components/pages/signup";
import Alert from "./components/molecules/alert";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("admin") ? <AdminNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Modal />
      <Alert />
    </>
  );
};

export default App;
