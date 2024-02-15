import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

// Page imports
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/my-portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact-me">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
