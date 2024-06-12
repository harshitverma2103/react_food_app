import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favorite food here</h2>
        <p>
          Discover a diverse menu with mouth-watering dishes crafted from the
          finest, freshest ingredients. Our talented chefs prepare each meal
          with passion and expertise, offering flavors to satisfy every craving.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
