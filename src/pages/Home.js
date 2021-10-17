import React, { useEffect, useContext } from "react";

/*Component imports */
import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

/* Css import */
import "../css/Home.css";

/* useContext hook */
import { NavbarMenuContext } from "../App";

const Home = () => {
  const { openMenu } = useContext(NavbarMenuContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (openMenu) {
    return <NavDropDown />;
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
