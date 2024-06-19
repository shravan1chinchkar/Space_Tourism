import React, { useState } from "react";
import "./Crew.css";
import Header from "../Header";
import Crew_Navigation from "./Crew_Navigation";
import data from "../../../public/data.json";
import clsx from "clsx";

const Crew = () => {
  // here the initial value of "crew" state is the 1st array from the multidimensional array "crew" present in data.json
  const [crew, setcrew] = useState(data.crew[0]);
  console.log(crew);

  return (
    <div className="crew_body">
      <Header />
      <main className="crew_main">
        {/* crew main heading content */}
        <div className="crew_heading">
          <div className="crew_heading_number">02</div>
          <div className="crew_heading_text">Meet Your Crew</div>
        </div>

        {/* Crew left and right content goes here */}
        <div className="crew_left_right_content">
          {/* <!-- left content --> */}
          <div className="left">
            
            <div className="crew_name_role_desc">
              <div className="crew_name">
                {/* crew Role */}
                <p className="crew_role">{crew.role}</p>
                {/* "commander_name" */}
                <p
                  className={clsx(
                    "commander_name",
                    crew.name === "Mark Shuttleworth" && "commander_name_2"
                  )}
                >
                  {crew.name}
                </p>
              </div>
              <div className="crew_description">{crew.bio}</div>
            </div>

            <Crew_Navigation
              isactive={crew.name}
              // following code is passed to change the state of the crew
              setcrew={setcrew}
              data={data}
            />
          </div>

          {/* <!-- right content --> */}
          <div className="right">
            <div className="crew_image">
              <img
                className={clsx(
                  "crew_image_img",
                  crew.name === "Anousheh Ansari" && "crew_image_img_2"
                )}
                src={"src" + crew.images.png}
                alt="Douglas"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
