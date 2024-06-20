import React, { useState } from "react";
import "./Technology.css";
import Header from "../Header";
import Technology_Navbar from "./Technology_Navbar";
import data from "../../../public/data.json";

const Technology = () => {
  const [technology, settechnology] = useState(data.technology[0]);

  return (
    <div className="technology_body">
      <Header />
      <main className="technology_main">
        {/*   Tech Top Content */}
        <div className="technology_lefttop">
          <span className="technology_lefttop_number">03</span> Space Launch 101
        </div>

        {/* Tech bottom Content */}
        <div className="techbottommain">
          {/* Technology Left Content */}
          <div className="technology_leftcontent">
            {/* Left bottom Content */}
            <div className="technology_leftbottom">
              <Technology_Navbar
                isActive={technology.name}
                settechnology={settechnology}
                data={data}
              />

              <div className="technology_content">
                <div className="technology_subtitle">The Terminology...</div>
                <div className="technology_title">{technology.name}</div>
                <div className="technology_description">
                  {technology.description}
                </div>
              </div>
            </div>
            
          </div>

          {/* Technology Right Content */}
          <div className="technology_rightcontent">
            <img
              src={`${
                window.innerWidth > 768 ?"src/"+technology.images.portrait : "src/"+technology.images.landscape
              }`}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Technology;
