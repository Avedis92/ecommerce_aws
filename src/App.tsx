import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Navbar from "./components/organisms/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
