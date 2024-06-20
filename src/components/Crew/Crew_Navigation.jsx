import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Crew_Navigation = ({ isactive, setcrew, data }) => {
  return (
    <>
      <div className="circle">
        {data.crew.map((item, id) => {
          return (
            <NavLink
              key={id}
              id={item.name}
              className={clsx(
                "a_circle",
                isactive === item.name && "a_circle_active"
              )}
              onClick={() => {
                setcrew(data.crew[id]);
              }}
            ></NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Crew_Navigation;
