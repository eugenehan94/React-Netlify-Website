import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "../css/Home.css";
import { NavbarMenuContext } from "../App";
const Home = () => {
  const { openMenu } = useContext(NavbarMenuContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
