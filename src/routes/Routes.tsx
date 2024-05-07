import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import OrdersGrid from "../components/OrdersGrid";
import Products from "../components/Products";
import Orders from "../components/Orders";
const PagesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Clients" element={<Home />} />
        <Route path="/" element={<OrdersGrid />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Orders" element={<Orders />} />
      </Routes>
    </>
  );
};

export default PagesRoutes;
