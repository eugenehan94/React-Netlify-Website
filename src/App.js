import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

import WebsiteProject from "./react-website-project/WebsiteProject";

import DiaryProject from "./react-diary-project/DiaryProject";

import ShootoutGame from "./js-shootout-game/ShootoutGame";
import CardMatchGame from "./js-card-match-game/CardMatchGame";
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

          <Route path="/WebsiteProject">
            <WebsiteProject />
          </Route>

          <Route path="/DiaryProject">
            <DiaryProject />
          </Route>

          <Route path="/ShootoutGame">
            <ShootoutGame />
          </Route>
          <Route path="/CardMatchGame">
            <CardMatchGame />
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
