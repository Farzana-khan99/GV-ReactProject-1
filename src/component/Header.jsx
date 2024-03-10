import React from "react";
import { NavLink} from "react-router-dom";
import "./Header.css";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-bar">
          <NavLink to="/">
            <p>
              F<span>k </span>
            </p>
          </NavLink>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
