import { createTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#DED9D6",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          color: "#000",
        },
      },
    },
  },
  typography: {
    button: {
      fontSize: "1.8rem",
    },
  },
});

export default theme;
