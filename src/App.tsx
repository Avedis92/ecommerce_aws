import { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/home";
import Navbar from "./components/organisms/navbar";
import AdminNavbar from "./components/organisms/adminNavbar";
import Modal from "./components/molecules/modalContainer";
import SignIn from "./components/pages/signin";
import SignUp from "./components/pages/signup";
import Alert from "./components/molecules/alert";
import AdminPage from "./components/pages/admin";
import Loader from "./components/molecules/loader";
import ProductPage from "./components/pages/product";
import Footer from "./components/organisms/footer";
import Pants from "./components/pages/pants";
import Shirts from "./components/pages/shirts";
import Shoes from "./components/pages/shoes";
import Cart from "./components/pages/cart";

const App = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<Loader text="Loading content" />}>
      {location.pathname.includes("admin") ? <AdminNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Modal />
      <Footer />
      <Alert />
    </Suspense>
  );
};

export default App;
