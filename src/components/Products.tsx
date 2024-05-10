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
import { BarChart } from "@mui/x-charts";
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
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const Products: React.FC<Props> = ({ data }) => {
  const location = useLocation();
  const { product, filteredOrders } = location.state;
  const [count, setCount] = useState<number>(0);
  const [processedData, setProcessed] = useState<number>(0);

  const cont = () => {
    let variable = 0;

    filteredOrders.map((item: any) => {
      variable = variable + item.quantity;
    });
    return variable;
  };
  useEffect(() => {
    const data_count = cont();
    setCount(data_count);
  }, []);

  return (
    <Container sx={{ padding: "8rem 0 0 0" }}>
      <Typography fontFamily={"Inter"} color={"#FF0101"} fontWeight={900}>
        Products <span style={{ color: "#1C1C1C" }}>/ {product.name}</span>
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
            width: "15%",
            borderRadius: "1rem",
            boxShadow: "0 0 10px #D9D9D9",
            padding: "2.5rem",
            maxHeight: "2rem",
          }}
        >
          <Typography fontFamily={"Inter"} fontSize={13}>
            Cantidad de ordenes: <br />
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
          {filteredOrders[0] ? (
            <Typography fontFamily={"Inter"} fontSize={13}>
              Cliente mas frecuente:
              <br />
              <span style={{ fontWeight: "700" }}>
                {filteredOrders[0].client_name}
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
            maxHeight: "wrem",
          }}
        >
          {filteredOrders[0] ? (
            <Typography fontFamily={"Inter"} fontSize={13}>
              Total:
              <br />
              <span style={{ fontWeight: "700" }}>
                $ {count * product.price}
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
            <ShoppingCartIcon
              sx={{ width: "10rem", height: "5rem", alignSelf: "center" }}
            />
            <Typography
              fontFamily={"Inter"}
              fontWeight={600}
              textAlign={"center"}
            >
              {product.name}
            </Typography>
            <Typography
              fontFamily={"Inter"}
              fontWeight={100}
              textAlign={"center"}
              fontSize={12.5}
            >
              Mermelada
            </Typography>
            <Typography fontFamily={"Inter"}>Id de producto</Typography>
            <Typography fontFamily={"Inter"} fontWeight={100} fontSize={12.5}>
              {product.id}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontFamily={"Inter"}>Sabor</Typography>
              <Typography fontFamily={"Inter"} fontWeight={100} fontSize={12.5}>
                {product.flavour}
              </Typography>
              <Typography fontFamily={"Inter"}>Stock</Typography>
              <Typography fontFamily={"Inter"} fontWeight={100} fontSize={12.5}>
                {product.stock}
              </Typography>
              <Typography fontFamily={"Inter"}>Precio</Typography>
              <Typography fontFamily={"Inter"} fontWeight={100} fontSize={12.5}>
                $ {product.price}
              </Typography>
            </Box>
          </Box>
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
                  <TableCell align="left">Cliente</TableCell>
                  <TableCell align="left">Cantidad</TableCell>
                  <TableCell align="left">Details</TableCell>
                  <TableCell align="left">Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredOrders.map((row: any) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.client_name}</TableCell>
                    <TableCell align="left">{row.quantity}</TableCell>
                    <TableCell align="left">{row.details}</TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
};

export default Products;
