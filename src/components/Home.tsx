import {
  Box,
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
interface Order {
  id: number;
  created_at: Date;
  details: string;
  client_id: string;
  products_id: number;
  quantity: number;
  updated_at: Date;
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

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const Home = () => {
  const [orders, setOrders] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get<any>(
          "https://cors.redoc.ly/https://dashboard-api-0n4e.onrender.com"
        );
        console.log(data);
        setOrders(orders);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    getData();
  }, [orders]);
  return (
    <Container sx={{ padding: "8rem 0 0 0" }}>
      <Typography fontFamily={"Inter"} color={"#FF0101"}>
        Client / <span>Nmae_Cliente</span>
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
            boxShadow: "0 0 10px black",
            padding: "2.5rem",
            maxHeight: "1.156rem",
          }}
        >
          <Typography fontFamily={"Inter"}>Cantidad</Typography>
        </Box>
        <Box
          sx={{
            width: "15%",
            borderRadius: "1rem",
            boxShadow: "0 0 10px black",
            padding: "2.5rem",
            maxHeight: "1.156rem",
          }}
        >
          <Typography fontFamily={"Inter"}>Producto Creado</Typography>
        </Box>
        <Box
          sx={{
            width: "15%",
            borderRadius: "1rem",
            boxShadow: "0 0 10px black",
            padding: "2.5rem",
            maxHeight: "1.156rem",
          }}
        >
          <Typography fontFamily={"Inter"}>Fecha</Typography>
        </Box>
        <Box
          sx={{
            width: "15%",
            borderRadius: "1rem",
            boxShadow: "0 0 10px black",
            padding: "2.5rem",
            maxHeight: "1.156rem",
          }}
        >
          <Typography fontFamily={"Inter"}>Ganancias</Typography>
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
          margin: "1.5rem 0 0 0"
        }}
      >
        <Box
          sx={{
            width: "25%",
            display: "flex",
            padding: "1.5rem",
            borderRadius: "1rem",
            boxShadow: "0 0 10px black",
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
              Nombre Cliente
            </Typography>
            <Typography
              fontFamily={"Inter"}
              fontWeight={100}
              textAlign={"center"}
              fontSize={12.5}
            >
              Correo Cliente
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontFamily={"Inter"}>Group</Typography>
              <Typography fontFamily={"Inter"} fontWeight={100} fontSize={12.5}>
                Datos
              </Typography>
              <Typography fontFamily={"Inter"}>Ubicacion</Typography>
              <Typography fontFamily={"Inter"} fontWeight={100} fontSize={12.5}>
                DatosUbicacion
              </Typography>
              <Typography fontFamily={"Inter"}>Primer pedido</Typography>
              <Typography fontFamily={"Inter"} fontWeight={100} fontSize={12.5}>
                Datospedido
              </Typography>
              <Typography fontFamily={"Inter"}>Cantidad</Typography>
              <Typography fontFamily={"Inter"} fontWeight={100} fontSize={12.5}>
                DatosCantidad
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
            boxShadow: "0 0 10px black",
          }}
        >
          Hola
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 0 10px black",
            margin: "1.5rem 0 0 0",
          }}
        >
          <TableContainer component={Paper} sx={{ borderRadius: "1rem" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#F8F8F8" }}>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
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
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
