import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./style.css";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <nav className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        {["Home", "Menu", "Mobile-app", "Contact-Us"].map((item) => (
          <li
            key={item}
            className={menu === item ? "active" : ""}
            onClick={() => handleMenuClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          alt="Search Icon"
          className="navbar-icon"
        />
        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div className="dot"></div>
        </div>
        <button className="sign-in-button">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
