import { Button, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import { Filter } from "@mui/icons-material";
interface Client {
  id: number;
  name: string;
  lastname: string;
  email: string;
  quantity_orders: number;
}
interface Order {
  id: number;
  client_id: number;
  products_id: number;
  quantity: number;
  details: string;
  created_at: Date;
  updated_at: Date;
}
interface Product {
  id: number;
  name: string;
  flavour: string;
  stock: number;
  price: number;
}
const OrdersGrid = () => {
  const [client, setClient] = useState<Client[]>([]);
  const [order, setOrder] = useState<Order[]>([]);
  const [product, setProduct] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response_client = await axios.get<any>(
          "https://cors.redoc.ly/https://dashboard-api-0n4e.onrender.com/clients/"
        );
        const response_orders = await axios.get<any>(
          "https://cors.redoc.ly/https://dashboard-api-0n4e.onrender.com/"
        );
        const response_products = await axios.get<any>(
          "https://cors.redoc.ly/https://dashboard-api-0n4e.onrender.com/products"
        );
        setClient(response_client.data.products);
        setOrder(response_orders.data.orders);
        setProduct(response_products.data.products);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    getData();
  }, []);

  return (
    // <Container sx={{ padding: "5rem" }}>
    //   {client.map((client: Client) => {
    //     const filteredOrders = order.filter(
    //       (order) => order.client_id === client.id
    //     );
    //     return (
    //       <Button
    //         key={client.id}
    //         onClick={() => {
    //           navigate("/Clients", { state: { client } });
    //         }}
    //       >
    //         <Typography
    //           key={client.id}
    //           color={"black"}
    //           textTransform={"capitalize"}
    //         >
    //           Cliente: {client.name} {client.lastname} - Pedidos:{" "}
    //           {filteredOrders.length}
    //         </Typography>
    //       </Button>
    //     );
    //   })}
    // </Container>
    <Container sx={{ padding: "5rem" }}>
      <Typography fontFamily={"Inter"} fontSize={"2rem"} fontWeight={800}>
        Listado de Clientes
      </Typography>
      {client.map((client: Client) => {
        const filteredOrders = order.filter(
          (order) => order.client_id === client.id
        );
        const filteredProducts = filteredOrders.map((order) => {
          return product.filter((product) => product.id === order.products_id);
        });
        return (
          <Button
            key={client.id}
            onClick={() => {
              console.log(filteredOrders);
              console.log(filteredProducts);
              navigate("/Clients", {
                state: { client, filteredOrders, filteredProducts },
              });
            }}
          >
            <Typography
              key={client.id}
              color={"black"}
              textTransform={"capitalize"}
            >
              Cliente: {client.name} {client.lastname}
            </Typography>
          </Button>
        );
      })}
      <Typography fontFamily={"Inter"} fontSize={"2rem"} fontWeight={800}>
        Listado de Ordenes
      </Typography>

      <Button
        onClick={() => {
          navigate("/Orders", {
            state: { order },
          });
        }}
      >
        <Typography color={"black"} textTransform={"capitalize"}>
          Navigate to Orders
        </Typography>
      </Button>
      <Typography fontFamily={"Inter"} fontSize={"2rem"} fontWeight={800}>
        Listado de Productos
      </Typography>
      {product.map((product: Product) => {
        const filteredOrders = order.filter(
          (item) => item.products_id === product.id
        );
        return (
          <Button
            key={product.id}
            onClick={() => {
              console.log(product);
              console.log(filteredOrders);
              navigate("/Products", {
                state: { product, filteredOrders },
              });
            }}
          >
            <Typography
              key={product.id}
              color={"black"}
              textTransform={"capitalize"}
            >
              Producto: {product.name}
            </Typography>
          </Button>
        );
      })}
    </Container>
  );
};

export default OrdersGrid;
