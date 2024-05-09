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

const CreateClient = () => {
  const [name, setName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [message, setMessage] = useState<string | any>("");

  const registerOrder = async () => {
    const data = {
      name: name,
      lastname: lastname,
      email: email,
      quantity: quantity,
    };

    console.log(data);
    const response = await axios.post(
      "https://cors.redoc.ly/https://dashboard-api-0n4e.onrender.com/saveclient/",
      data
    );
    console.log(response.data.message);
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
            Registrar Cliente
          </Typography>
          <TextField
            id="outlined-basic"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            label={
              <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                Nombre
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
              setLastName(e.target.value)
            }
            label={
              <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                Last Name
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
                Cantidad de Ordenes
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
              setEmail(e.target.value)
            }
            label={
              <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                Email
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

export default CreateClient;
