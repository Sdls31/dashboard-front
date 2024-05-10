import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Pages = ["Ordenes", "Clientes", "Productos"];

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleButtonEvent = (selectedPage: string) => {
    if (selectedPage == "Ordenes") {
      navigate("/createorder");
    }
    if (selectedPage == "Clientes") {
      navigate("/createclient");
    }
    if (selectedPage == "Productos") {
      navigate("/createproduct");
    }
  };

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
              <IconButton
                sx={{ width: "3rem", height: "3rem" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <img
                  src="src\assets\logo-profile-pic.webp"
                  alt="logo-profile-pic"
                  style={{ width: "4rem" }}
                />
              </IconButton>
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
                  <Button
                    key={index}
                    value={item}
                    onClick={() => {
                      handleButtonEvent(item);
                    }}
                  >
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
              <IconButton onClick={() => navigate("/login")}>
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
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon sx={{ color: "#0F0F0F" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {Pages.map((page) => (
                <MenuItem key={page} onClick={() => handleButtonEvent(page)}>
                  <Typography fontFamily={"Inter"} textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              sx={{ width: "3rem", height: "3rem" }}
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                src="src\assets\logo-profile-pic.webp"
                alt="logo-profile-pic"
                style={{ width: "4rem" }}
              />
            </IconButton>
            <IconButton onClick={() => navigate("/login")}>
              <AccountCircleIcon sx={{ color: "#0F0F0F" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
