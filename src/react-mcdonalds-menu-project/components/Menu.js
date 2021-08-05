import React from "react";
import "../css/Menu.css";

const Menu = ({ selected, menus }) => {
  return (
    <div>
      <h1 className="menu-title">{selected}</h1>
      <div className="menu-container">
        {menus.map((item, id) => {
          return (
            <div key={id} className="menu-options">
              <img src={item.img} alt={item.title} />
              <h3 style={{ backgroundColor: "white" }}>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
