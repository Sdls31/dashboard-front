import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation } from "react-router-dom";
interface Order {
  id: number;
  created_at: Date;
  details: string;
  client_id: string;
  products_id: number;
  quantity: number;
  updated_at: Date;
}
interface Props {
  data?: Order;
}

const Orders: React.FC<Props> = ({ data }) => {
  const location = useLocation();
  const { order } = location.state;
  const imprimir = () => {
    console.log(order);
  };
  return (
    <Container sx={{ padding: "8rem 0 0 0" }}>
      <Typography fontFamily={"Inter"} color={"#FF0101"} fontWeight={900}>
        Orders /<span style={{ color: "#1C1C1C" }}> {order.id} </span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "1rem 0 0 0",
          width: "100%",
          gap: "1rem",
          margin: "1.5rem 0 0 0",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 0 10px #D9D9D9",
            margin: "1.5rem 0 0 0",
            flexDirection: "column",
          }}
        >
          <Typography fontFamily={"Inter"} mb={2}>
            Pedidos
          </Typography>
          <TableContainer component={Paper} sx={{ borderRadius: "1rem" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#F8F8F8" }}>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="left">ID Clients</TableCell>
                  <TableCell align="left">ID Products</TableCell>
                  <TableCell align="left">Details</TableCell>
                  <TableCell align="left">Address</TableCell>
                  <TableCell align="left">Fecha</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.map((item: any) => {
                  return (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography fontFamily={"Inter"}>{item.id}</Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography fontFamily={"Inter"}>{item.client_name}</Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography fontFamily={"Inter"}>{item.products_id}</Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography fontFamily={"Inter"}>{item.details}</Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography fontFamily={"Inter"}>{item.address}</Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography fontFamily={"Inter"}>{item.created_at}</Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
};

export default Orders;
