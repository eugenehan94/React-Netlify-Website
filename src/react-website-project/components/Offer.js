import React, { useState } from "react";

const Offer = ({ id, name, info, image, price, removeOffer }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="offer-wrapper">
      <img src={image} alt={name} />

      <div className="offer-info">
        <h4>{name}</h4>
        <h4>{price}</h4>
      </div>
      <div className="offer-text">
        <p>
          {showInfo ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? "show less" : "show more"}
          </button>
        </p>
      </div>
      <div className="offer-removeBtn-container">
        <button className="offer-wrapper-btn" onClick={() => removeOffer(id)}>
          remove
        </button>
      </div>
    </article>
  );
};

export default Offer;
