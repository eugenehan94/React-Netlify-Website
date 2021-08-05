import NavBar from "../../components/Navbar";
import Navbar from "./Navbar";
import familyImage from "../images/FamilyImage.jpg";

import "../css/Family.css";

const Family = () => {
  return (
    <>
      <NavBar />
      <Navbar />
      <h1 className="Family-title">Family</h1>

      <div style={{ backgroundColor: "white" }}>
        <img src={familyImage} alt="Family Image" className="familyImage"></img>
      </div>
      <div className="family-message-container">
        <div className="family-message-title">
          <h2 style={{ backgroundColor: "white" }}>
            Happy kids, happy parents
          </h2>
        </div>
        <div className="family-message-content">
          <h3 style={{ backgroundColor: "white" }}>
            You want the best for your family. So do we.
          </h3>
          <p style={{ backgroundColor: "white" }}>
            Choose from great Happy Meal® options like apple slices, 1% milk,
            and our tender and juicy Chicken McNuggets® made without any
            artificial colours, flavours, or preservatives.
          </p>
          <p style={{ backgroundColor: "white" }}>
            Every time you enjoy a Happy Meal, you’re helping over 30,000
            families each year stay close to their sick child at Ronald McDonald
            Houses and Ronald McDonald Family Rooms across Canada.
          </p>
          <button className="family-message-button">Learn about RMHC</button>
        </div>
      </div>
    </>
  );
};

export default Family;
