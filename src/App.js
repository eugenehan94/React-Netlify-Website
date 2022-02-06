import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

import JavaCustomerFileProject from "./java-customer-file-project/CustomerFileProject";
// useContext for the state and toggle function of the Navigation bar
export const NavbarMenuContext = React.createContext();

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <NavbarMenuContext.Provider value={{ openMenu, toggle }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>

          <Route path="/JavaCustomerFileProject">
            <JavaCustomerFileProject />
          </Route>
        </Switch>
      </Router>
    </NavbarMenuContext.Provider>
  );
}

export default App;
