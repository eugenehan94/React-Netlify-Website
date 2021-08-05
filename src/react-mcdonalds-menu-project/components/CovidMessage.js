import React from "react";
import "../css/CovidMessage.css";

const CovidMessage = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="message-container">
        <p>
          The health and well-being of our crew and guests has always been
          important to us. To support social distancing and ensure the best
          possible experience for our crew and guests, we are simplifying our
          menu by temporarily removing some items. A full range of our classic
          products and favourites are still available for you to enjoy.
        </p>
      </div>
    </div>
  );
};

export default CovidMessage;
