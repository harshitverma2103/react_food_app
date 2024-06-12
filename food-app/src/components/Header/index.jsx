import React from "react";
import { assets } from "../../assets/assets";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
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
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
