import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { navData } from "../../data";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="navbar">
        {navData.map(({ name, icon, path }, idx) => {
          return (
            <div
              className={`nav-icons-wrapper ${
                location.pathname === path ? "active" : ""
              } `}
              key={idx}
            >
              <h4 className= 'nav-name'>
                {name}
              </h4>
              <Link to={path}>{icon}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
