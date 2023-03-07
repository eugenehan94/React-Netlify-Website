/* NOTE: Keeping React Router, for future sakes if we introduce different pages*/
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./components/loading";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loading setLoading={setLoading}/>;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home setLoading={setLoading}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
