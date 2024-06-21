import React from "react";
import { NavLink } from "react-router-dom";
import "./Destination.css";
import clsx from "clsx";

const Destination_Navbar = ({ activeName, setDestination, data }) => {
  return (
    <>
      <nav className="rightnav">
        <ul className="rightul">
          {data.destinations.map((item, id) => (
            <li className="rightli" key={id}>
              <NavLink
                id={item.name}
                className={clsx(
                  "rightnavlinks",
                  activeName === item.name && "defaultrightnavlinkunderline"
                )}
                onClick={() => { setDestination(data.destinations[id])
                }
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Destination_Navbar;
