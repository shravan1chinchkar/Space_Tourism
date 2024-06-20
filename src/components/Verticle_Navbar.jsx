import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import clsx from "clsx";

const Verticle_Navbar = ({ display, setdisplay }) => {
  return (
    // hideverticlenavbar verticlenavbar
    <div className={clsx("hideverticlenavbar", display)}>
      <ul className="verticleul">
        <span
          className="material-symbols-outlined cross"
          onClick={() => setdisplay("hideverticlenavbar")}
        >
          close
        </span>

        <li className="dotverticleli"> 
          <NavLink className={(e)=>{return e.isActive?"verticleli verticlelia activeverticleli":"verticleli verticlelia"}} to="/">
            <span className="verticlenumber">01</span> Home
          </NavLink>
        </li>

        <li className="dotverticleli">
          <NavLink className={(e)=>{return e.isActive?"verticleli verticlelia activeverticleli":"verticleli verticlelia"}} to="/destination">
            <span className="verticlenumber">02</span> Destination
          </NavLink>
        </li>

        <li className="dotverticleli">
          <NavLink className={(e)=>{return e.isActive?"verticleli verticlelia activeverticleli":"verticleli verticlelia"}} to="/crew">
            <span className="verticlenumber">03</span> Crew
          </NavLink>
        </li>

        <li className="dotverticleli">
          <NavLink className={(e)=>{return e.isActive?"verticleli verticlelia activeverticleli":"verticleli verticlelia"}} to="/technology">
            <span className="verticlenumber">04</span> Technology
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Verticle_Navbar;
