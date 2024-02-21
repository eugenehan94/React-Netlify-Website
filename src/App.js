import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

// Page imports
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ScrollToTopOfPage from "./components/_shared/scrollToTopOfPage";
function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTopOfPage />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/my-portfolio" element={<Portfolio />}></Route>
          <Route path="/contact-me" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
