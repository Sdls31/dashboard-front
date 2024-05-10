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

const UpdateOrders = () => {
  const [details, setDetails] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [id_order, setIdOrder] = useState<string>("");
  const [message, setMessage] = useState<string | any>("");
  const navigate = useNavigate();

  const registerOrder = async () => {
    const response = await axios.patch(
      "https://cors.redoc.ly/https://dashboard-api-0n4e.onrender.com/update/",
      {
        id: id_order,
        details,
        address,
      }
    );
    console.log(response.data.message);
    setMessage(response);
    navigate("/");
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
            Registrar Order
          </Typography>
          <TextField
            id="outlined-basic"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIdOrder(e.target.value)
            }
            label={
              <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                ID Orden
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
              setAddress(e.target.value)
            }
            label={
              <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                Address
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
              setDetails(e.target.value)
            }
            label={
              <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                Details
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

export default UpdateOrders;
