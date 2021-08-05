import React, { useState } from "react";
import jointData from "../data/JointData";
const AboutJoint = ({ title, info }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (id) => {
    console.log(clicked);
    if (clicked === id) {
      return setClicked(null);
    }
    return setClicked(id);
  };

  return (
    <section style={{ backgroundColor: "white" }}>
      {jointData.map((item, id) => {
        return (
          <React.Fragment key={id}>
            <button
              className="faq-button"
              onClick={() => {
                toggle(id);
              }}
            >
              <h2 className="faq-heading">{item.title}</h2>
              <span className="faq-icon"> {clicked === id ? "x" : "+"}</span>
            </button>
            <div className="faq-content">
              {clicked === id ? <p>{item.info}</p> : null}
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default AboutJoint;
