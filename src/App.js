import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./components/loading";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

export const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7", // vs blueDark 900: WCAG 11.6 AAA, APCA 78 Best for text
  400: "#B2BAC2", // vs blueDark 900: WCAG 9 AAA, APCA 63.3 Ok for text
  500: "#A0AAB4", // vs blueDark 900: WCAG 7.5 AAA, APCA 54.3 Only for large text
  600: "#6F7E8C", // vs white bg: WCAG 4.1 AA, APCA 68.7 Ok for text
  700: "#3E5060", // vs white bg: WCAG 8.3 AAA, APCA 88.7 Best for text
  800: "#2D3843", // vs white bg: WCAG 11.9 AAA, APCA 97.3 Best for text
  900: "#1A2027",
};
export const blueDark = {
  50: "#E2EDF8",
  100: "#CEE0F3",
  200: "#91B9E3",
  300: "#5090D3",
  main: "#5090D3",
  400: "#265D97",
  500: "#1E4976",
  600: "#173A5E",
  700: "#132F4C", // contrast 13.64:1
  800: "#001E3C",
  900: "#0A1929",
};
/* "getDesignTokens" used to override default theme
NOTE: mode is for light and dark mode
*/
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" && {
      background: {
        default: blueDark[800],
        paper: blueDark[900],
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
    },
  },
});
/* Won't be using Redux to store/access values/functions.
Instead will use React Context to allow easy access for deeper level components.
*/
export const ColorModeContext = React.createContext({
  mode: "light",
  toggleColorMode: (input) => {},
});

function App() {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = React.useState("light");

  const colorMode = React.useMemo(
    () => ({
      mode: mode,
      toggleColorMode: (input) => {
        setMode(input);
      },
    }),
    [mode]
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  if (loading) {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Loading setLoading={setLoading} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home setLoading={setLoading} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
