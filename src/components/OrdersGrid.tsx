import { Button, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
interface Order {
  id: number;
  created_at: Date;
  details: string;
  client_id: string;
  products_id: number;
  quantity: number;
  updated_at: Date;
}
const OrdersGrid = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<any>(
          "https://cors.redoc.ly/https://dashboard-api-0n4e.onrender.com"
        );
        setOrders(response.data.orders);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    getData();
  }, []);
  return (
    <Container sx={{ padding: "5rem" }}>
      {orders.map((order: Order) => (
        <Button
          key={order.id}
          onClick={() => {
            navigate("/Clients", { state: { order } });
          }}
        >
          <Typography
            key={order.id}
            color={"black"}
            textTransform={"capitalize"}
          >
            Cliente: {order.id}
          </Typography>
        </Button>
      ))}
    </Container>
  );
};

export default OrdersGrid;
