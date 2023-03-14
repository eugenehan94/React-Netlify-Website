/* NOTE: Keeping React Router, for future sakes if we introduce different pages*/
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./components/loading";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

import { amber, deepOrange, grey } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     primary: {
//       ...amber,
//       ...(mode === "dark" && {
//         main: amber[300],
//       }),
//     },
//     ...(mode === "dark" && {
//       background: {
//         default: deepOrange[900],
//         paper: deepOrange[900],
//       },
//     }),
//     text: {
//       ...(mode === "light"
//         ? {
//             primary: grey[900],
//             secondary: grey[800],
//           }
//         : {
//             primary: "#fff",
//             secondary: grey[500],
//           }),
//     },
//   },
});

function App() {
  const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );
  const theme = React.useMemo(() => createTheme(getDesignTokens("dark")), [
    mode,
  ]);
  const [loading, setLoading] = useState(true);

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
