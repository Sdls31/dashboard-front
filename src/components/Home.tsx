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
import { BarChart } from "@mui/x-charts/BarChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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

interface Record {
  products_id: string;
  quantity: number;
}

const Home: React.FC<Props> = () => {
  const location = useLocation();
  const { client, filteredOrders, filteredProducts } = location.state;
  const [countData, setCount] = useState<number>(0);
  const count = () => {
    let variable = 0;
    filteredOrders.map((item: any) => {
      variable = variable + item.quantity;
    });
    return variable;
  };

  const quantitiesByProductId: Record = filteredOrders.reduce(
    (accumulator: any, order: any) => {
      const productId: string = order.products_id;
      const quantity: number = order.quantity;

      // Si el productId ya está en el acumulador, sumar la cantidad
      if (accumulator[productId]) {
        accumulator[productId] += quantity;
      } else {
        // Si no está, inicializarlo con la cantidad actual
        accumulator[productId] = quantity;
      }

      return accumulator;
    },
    {}
  );

  useEffect(() => {
    setCount(count());
  }, []);

  const xAxis = Object.keys(quantitiesByProductId);
  const yAxis = Object.values(quantitiesByProductId);

  return (
    <Container sx={{ padding: "8rem 0 0 0" }}>
      <Typography fontFamily={"Inter"} color={"#FF0101"} fontWeight={900}>
        Client
        <span style={{ color: "#1C1C1C" }}>
          / {client.name} {client.lastname}
        </span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "2.5rem 0 0 0",
          width: "100%",
          gap: "1rem",
          flexWrap: "wrap",
          flexBasis: "50%",
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            borderRadius: "1rem",
            boxShadow: "0 0 10px #D9D9D9",
            padding: "2.5rem",
            maxHeight: "2rem",
          }}
        >
          <Typography fontFamily={"Inter"} fontSize={13}>
            Cantidad de Ordenes: <br />
            <span style={{ fontWeight: "700" }}>{filteredOrders.length}</span>
          </Typography>
        </Box>
        <Box
          sx={{
            width: "15%",
            borderRadius: "1rem",
            boxShadow: "0 0 10px #D9D9D9",
            padding: "2.5rem",
            maxHeight: "2rem",
          }}
        >
          <Typography fontFamily={"Inter"} fontSize={13}>
            Detalles ultimo pedido:{" "}
            <span style={{ fontWeight: "700" }}>
              {filteredOrders[filteredOrders.length - 1].details}
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            width: "15%",
            borderRadius: "1rem",
            boxShadow: "0 0 10px #D9D9D9",
            padding: "2.5rem",
            maxHeight: "2rem",
          }}
        >
          {filteredOrders[0] ? (
            <Typography fontFamily={"Inter"} fontSize={13}>
              Primer pedido:
              <br />
              <span style={{ fontWeight: "700" }}>
                {filteredOrders[0].created_at}
              </span>
            </Typography>
          ) : (
            <Typography
              fontFamily={"Inter"}
              fontSize={13}
              fontStyle={"italic"}
              fontWeight={900}
            >
              Haz un pedido antes
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            width: "15%",
            borderRadius: "1rem",
            boxShadow: "0 0 10px #D9D9D9",
            padding: "2.5rem",
            maxHeight: "2rem",
          }}
        >
          <Typography fontFamily={"Inter"} fontSize={13}>
            Total: <br />
            <span style={{ fontWeight: "700" }}>$ {countData * 120}</span>
          </Typography>
        </Box>
      </Box>
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
            width: "25%",
            display: "flex",
            padding: "1.5rem",
            borderRadius: "1rem",
            boxShadow: "0 0 10px #D9D9D9",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "90%",
              flexDirection: "column",
            }}
          >
            <AccountCircleIcon
              sx={{ width: "10rem", height: "5rem", alignSelf: "center" }}
            />
            <Typography
              fontFamily={"Inter"}
              fontWeight={600}
              textAlign={"center"}
            >
              {client.name}
            </Typography>
            <Typography
              fontFamily={"Inter"}
              fontWeight={600}
              textAlign={"center"}
            >
              {client.lastname}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontFamily={"Inter"}>ID</Typography>
              <Typography fontFamily={"Inter"} fontWeight={100} fontSize={12.5}>
                {client.id}
              </Typography>
              <Typography fontFamily={"Inter"}>E-mail</Typography>
              <Typography fontFamily={"Inter"} fontWeight={100} fontSize={12.5}>
                {client.email}
              </Typography>
              <Typography fontFamily={"Inter"}>Cantidad</Typography>
              <Typography fontFamily={"Inter"} fontWeight={100} fontSize={12.5}>
                {filteredOrders.length}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "65%",
            display: "flex",
            padding: "1rem",
            borderRadius: "1rem",
            boxShadow: "0 0 10px #D9D9D9",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography fontFamily={"Inter"}>
            Cantidad de productos pedidos
          </Typography>
          <BarChart
            xAxis={[{ scaleType: "band", data: xAxis }]}
            series={[{ data: yAxis }]}
            width={500}
            height={300}
          />
        </Box>
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
                  <TableCell align="left">Product ID</TableCell>
                  <TableCell align="left">Created</TableCell>
                  <TableCell align="left">Detalles</TableCell>
                  <TableCell align="left">Cantidad (Lotes)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredOrders.map((order: any) => {
                  return (
                    <TableRow key={order.id}>
                      <TableCell component="th" scope="row">
                        <Typography fontFamily={"Inter"}>{order.id}</Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography fontFamily={"Inter"}>
                          {order.products_id}
                        </Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography fontFamily={"Inter"}>
                          {order.created_at}
                        </Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography fontFamily={"Inter"}>
                          {order.details}
                        </Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography fontFamily={"Inter"}>
                          {order.quantity}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {/* {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}  */}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
