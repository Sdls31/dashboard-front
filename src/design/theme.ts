import { createTheme } from "@mui/material/styles";

export const evo2FontFamily = "'Exo 2', sans-serif";

const secondary = {
  dark: "#293937",
  main: "#FFD369",
  light: "#F4F4F4",
};

const primary = {
  dark: "#222831",
  main: "#424750",
  light: "#E1E2E3",
};

export const Colors = {
  white: "#FFFFFF",
  black: "#424750",
  primary,
  secondary,
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary,
    secondary,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: Colors.white,
        },
      },
    },
    MuiButton: { styleOverrides: { root: { textTransform: "none" } } },
  },
  typography: {
    fontFamily: [
      "Gotham",
      "Itim",
      "Josefin Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Poppins"',
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "Inter",
    ].join(","),
  },
});

export default theme;
