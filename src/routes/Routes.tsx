import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";

const PagesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default PagesRoutes;
