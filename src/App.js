/* Keeping React Router, for future sakes if we introduce different pages*/
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

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
        </Switch>
      </Router>
    </NavbarMenuContext.Provider>
  );
}

export default App;
