import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

const Pages = ["Ordenes", "Clientes", "Productos"];

const handleButtonEvent = (selectedPage: string) => {};

const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        display: "flex",
        backgroundColor: "#FFFFFF",
        flexDirection: "column",
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          width: "100%",
          minHeight: "1rem",
          backgroundColor: "#B30000",
        }}
      ></Container>
      <Container maxWidth="xl" sx={{ width: "100%" }}>
        <Toolbar disableGutters sx={{ minHeight: "4rem" }}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", width: "50%" }}>
              <img
                src="src\assets\logo-profile-pic.webp"
                alt="logo-profile-pic"
                style={{ width: "4rem" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "40%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {Pages.map((item, index) => {
                return (
                  <Button key={index} value={item}>
                    <Typography
                      fontFamily={"Inter"}
                      fontWeight={700}
                      color={"#0F0F0F"}
                      textTransform={"capitalize"}
                    >
                      {item}
                    </Typography>
                  </Button>
                );
              })}
              {/* <Typography
                fontFamily={"Inter"}
                fontWeight={1000}
                color={"#0F0F0F"}
              >
                Ventas
              </Typography>
              <Typography
                fontFamily={"Inter"}
                fontWeight={1000}
                color={"#0F0F0F"}
                sx={{ display: "flex" }}
              >
                Clientes
              </Typography>
              <Typography
                fontFamily={"Inter"}
                fontWeight={1000}
                color={"#0F0F0F"}
                sx={{ display: "flex" }}
              >
                Productos
              </Typography> */}
              <IconButton>
                <AccountCircleIcon sx={{ color: "#0F0F0F" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton>
              <MenuIcon sx={{ color: "#0F0F0F" }} />
            </IconButton>
            <img
              src="src\assets\logo-profile-pic.webp"
              alt="logo-profile-pic"
              style={{ width: "4rem" }}
            />
            <IconButton>
              <AccountCircleIcon sx={{ color: "#0F0F0F" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
