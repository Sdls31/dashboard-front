import { AccountCircleOutlined, PasswordOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
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
            height: "20rem",
            margin: "0 0 2.5rem 0",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
            <Typography fontFamily={"Inter"} fontSize={"1rem"}>Iniciar Sesión</Typography>
            <TextField
              id="outlined-basic"
              label={
                <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                  Username
                </Typography>
              }
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircleOutlined />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-basic"
              type="password"
              label={
                <Typography fontFamily={"Inter"} fontSize={"1rem"}>
                  Password
                </Typography>
              }
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PasswordOutlined />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
    </Container>
  );
};

export default LogIn;
