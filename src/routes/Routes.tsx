import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import OrdersGrid from "../components/OrdersGrid";
import Products from "../components/Products";
import Orders from "../components/Orders";
import CreateOrder from "../components/createOrder";
import CreateClient from "../components/createClient";
import CreateProduct from "../components/createProduct";
import CreateUser from "../components/createUser";
import Login from "../components/login";
import DeleteUser from "../components/deleteOrder";
import UpdateOrders from "../components/updateOrders";


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
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/delete" element={<DeleteUser />} />
        <Route path="/updateOrders" element={<UpdateOrders/>} />
      </Routes>
    </>
  );
};

export default PagesRoutes;
