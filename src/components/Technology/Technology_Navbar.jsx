import React from "react";
import "./Technology.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Technology_Navbar = ({ isActive, settechnology, data }) => {
  return (
    <div>
      <ul className="technology_navbar">
        {data.technology.map((item, id) => {
          return (
            // technology_nav_li
            <li 
            key={id}
            id={item.name} 
            className={clsx("technology_nav_li",isActive===item.name && "technology_nav_li_active")}
            onClick={()=>settechnology(data.technology[id])} >
              {data.technology.indexOf(item)+1}
            </li>
          );
        })}
        {/* <li className="technology_nav_li">
          <NavLink href="">1</NavLink>
        </li>
        <li className="technology_nav_li">
          <NavLink href="">2</NavLink>
        </li>
        <li className="technology_nav_li">
          <NavLink href="">3</NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default Technology_Navbar;