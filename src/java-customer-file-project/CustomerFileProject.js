import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
// import Footer from "../components/Footer";
import ClientSearchVideo from "./video/JavaProjectClientSearch.mp4";
import ClientNewVideo from "./video/JavaProjectNewClient.mp4";
import { NavbarMenuContext } from "../App";
import "./CustomerFileProjects.css";

const CustomerFileProject = () => {
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
      <h1 className="customerFile-title">Java Spring Customer CRUD Project</h1>
      <div className="customerFile-underline"></div>

      <h2 className="customerFile-header">New Client</h2>
      <div className="customerFile-underline"></div>
      <div className="customerFile-video-container">
        <video autoPlay loop muted id="customerFile-video">
          <source src={ClientNewVideo} type="video/mp4" />
        </video>
      </div>
      <h2 className="customerFile-header">Client Search</h2>
      <div className="customerFile-underline"></div>
      <div className="customerFile-video-container">
        <video autoPlay loop muted id="customerFile-video">
          <source src={ClientSearchVideo} type="video/mp4" />
        </video>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default CustomerFileProject;
