import {
  AccountCircleOutlined,
  Details,
  Inventory2,
  PasswordOutlined,
  Person4,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import axios from "axios";

const LogIn = () => {
  const [address, setAddress] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [details, setDetails] = useState<string>("");
  const [productId, setProductId] = useState<number>(0);
  const [clientId, setClientId] = useState<number>(0);
  const [message, setMessage] = useState<string | any>("");

  const registerOrder = async () => {
    const data = {
      client_id: clientId.toString(),
      product_id: productId.toString(),
      quantity: quantity,
      details: details,
      address: address,
    };

    console.log(data);
    const response = await axios.post(
      "https://cors.redoc.ly/http://127.0.0.1:8000/saveorder/",
      // "https://cors.redoc.ly/https://dashboard-api-0n4e.onrender.com/saveorder/",
      data
    );
    console.log(response.data.error);
    setMessage(response);
  };

  // const navigate = useNavigate();
  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        width: "100%",
        padding: "8rem 0 0 0",
      }}
    >
      <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "30rem",
            margin: "0 0 2.5rem 0",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography fontFamily={"Inter"} fontSize={"2rem"}>
            Registrar Orden
          </Typography>
          <TextField
            id="outlined-basic"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setClientId(Number(e.target.value))
            }
            label={
              <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                Id de Cliente
              </Typography>
            }
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Person4 />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setProductId(Number(e.target.value))
            }
            label={
              <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                Id de Producto
              </Typography>
            }
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CategoryIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuantity(Number(e.target.value))
            }
            label={
              <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                Cantidad de Cajas
              </Typography>
            }
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Inventory2 />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDetails(e.target.value)
            }
            label={
              <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                Detalles de Entrega
              </Typography>
            }
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Details />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAddress(e.target.value)
            }
            label={
              <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                Domicilio
              </Typography>
            }
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#B30000" }}
            onClick={() => registerOrder()}
          >
            Registrar
          </Button>
          {/* {message && (
            <Typography fontFamily={"Inter"} fontSize={"1rem"}>
              {message}
            </Typography>
          )} */}
        </Box>
      </Box>
    </Container>
  );
};

export default LogIn;
