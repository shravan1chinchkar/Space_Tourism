import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Verticle_Navbar from "./Verticle_Navbar";

const Header = () => {
  const [display, setdisplay] = useState("hideverticlenavbar");
  return (
    // <!--header content  -->
    <header>
      {/* <!-- logo --> */}
      <div className="logocontainer">
        <img
          src="../assets/shared/logo.svg"
          id="hamb"
          alt="logo"
          className="logo"
        />
      </div>

      {/* <!-- hamburbger icon --> */}
      <img
        src="../assets/shared/icon-hamburger.svg"
        alt="hamburger"
        className="hamburger"
        onClick={() => setdisplay("verticlenavbar")}
      />

      {/* <!-- horizontal line --> */}
      <div className="line"></div>

      {/* <!-- nav bar --> */}
      <nav className="mainnavbar">
        <ul className="navul">
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? "navlinks defaultunderline" : "navlinks";
              }}
              id="h_navitem"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? "navlinks defaultunderline" : "navlinks";
              }}
              id="d_navitem"
              to="/destination"
            >
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? "navlinks defaultunderline" : "navlinks";
              }}
              id="c_navitem"
              to="/crew"
            >
              Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? "navlinks defaultunderline" : "navlinks";
              }}
              id="t_navitem"
              to="/technology"
            >
              Technology
            </NavLink>
          </li>
        </ul>
      </nav>

      <Verticle_Navbar display={display} setdisplay={setdisplay} />
    </header>
  );
};

export default Header;
