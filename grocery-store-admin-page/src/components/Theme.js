import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
  },
  typography: {
    h6: {
      fontFamily: ["Roboto"],
    },
  },
});

const themeDark = createTheme({
  palette: {
    primary: {
      main: "#673ab7",
    },
  },
  typography: {
    h6: {
      fontFamily: ["Roboto"],
    },
  },
});

export const ColorModeContext = createContext();

export const Theme = ({ children }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <ColorModeContext.Provider value={{ handleChange, checked }}>
      <ThemeProvider theme={checked ? theme : themeDark}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}