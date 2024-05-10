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

const DeleteUser = () => {
  const [id_order, setID] = useState<string>("");
  const [message, setMessage] = useState<string | any>("");

  const registerOrder = async () => {
    const response = await axios.delete(
      "https://cors.redoc.ly/https://dashboard-api-0n4e.onrender.com/delete/",
      { data: { id: id_order } }
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
            Registrar Order
          </Typography>
          <TextField
            id="outlined-basic"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setID(e.target.value)
            }
            label={
              <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                ID a borrar
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

export default DeleteUser;
