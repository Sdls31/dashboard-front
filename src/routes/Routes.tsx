import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import OrdersGrid from "../components/OrdersGrid";
import Products from "../components/Products";
import Orders from "../components/Orders";
import CreateOrder from "../components/createOrder";
import CreateClient from "../components/createClient";
import CreateProduct from "../components/createProduct";
const PagesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Clients" element={<Home />} />
        <Route path="/" element={<OrdersGrid />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/createorder" element={<CreateOrder />} />
        <Route path="/createclient" element={<CreateClient />} />
        <Route path="/createproduct" element={<CreateProduct />} />
      </Routes>
    </>
  );
};

export default PagesRoutes;
