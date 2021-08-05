import { useState, useEffect } from "react";

import NavBar from "../components/Navbar";
import Home from "../pages/Home";
import Navbar from "./components/Navbar";
import CovidMessage from "./components/CovidMessage";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import MenuOptions from "./components/MenuOptions";
import Promotions from "./components/Promotions";
import Family from "./components/Family";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./McdonaldsMenu.css";

//The new Set function isolates for unique values
//Prevents repeating categories from being displayed
const allCategories = [
  ...new Set(MenuOptions.map((options) => options.category)),
];

//Sorts the menu options alphabetically by name
//If console log, you can see the ids in different order
MenuOptions.sort(function (a, b) {
  let itemA = a.title.toUpperCase();
  let itemB = b.title.toUpperCase();

  if (itemA < itemB) {
    return -1;
  }
  if (itemA > itemB) {
    return 1;
  }
  return 0;
});

const McdonaldsMenu = () => {
  const [menu, setMenu] = useState(MenuOptions);
  const [categories, setCategories] = useState(allCategories);
  const [selected, setSelected] = useState("Temporary Limited Menu");

  const fullMenu = () => {
    setMenu(MenuOptions);
    setSelected("Temporary Limited Menu");
  };

  const filtering = (category) => {
    if (category === "All") {
      setMenu(MenuOptions);
      setSelected("Temporary Limited Menu");
      return;
    }

    let newMenu = MenuOptions.filter(
      (options) => options.category === category
    );
    setMenu(newMenu);
    setSelected(category);
  };

  return (
    <div>
      <NavBar />
      <Navbar />
      {/* <Router>
        <Switch>
          <Route exact path="/menu"> */}
      <CovidMessage />
      <div className="Mcdonalds-container">
        <div className="Mcdonalds-container-categories">
          <Categories
            categories={categories}
            filtering={filtering}
            fullMenu={fullMenu}
            selected={selected}
            menuOptions={MenuOptions}
          />
        </div>
        <div className="Mcdonalds-container-menu">
          <Menu selected={selected} menus={menu} />
        </div>
      </div>
      {/* </Route>
        </Switch>
      </Router> */}
    </div>
  );
};

export default McdonaldsMenu;
