import React, { useState, useEffect } from "react";
import Header from "../Header";
import "./Destination.css";
import Destination_Navbar from "./Destination_Navbar";


const Destination = () => {
  const [destination, setdestination] = useState([]);

  // Fetch the data from data.json file
  async function fetchdata() {
    let a = await fetch("http://localhost:5173/data.json");
    let b = await a.json();
    let data=b.destinations[0];
    setdestination(data);
  }

  // Following code will call the fetchdata() only once
  useEffect(() => {
      fetchdata();
    }, []);

    
  return (
    <>
      <div className="destination_body">
        {/* Header Content */}
        <Header />

        {/* Main Content */}

        {/* {destination.map((destination)=>{
            return (
            <main key={destination.name} className='destination_main'>

                main cha leftcontent

                <div className="leftcontent">
                <div className="lefttop">
                    <div className="leftnumber">
                        01
                    </div>
                    <div className="lefttext">
                        Pick your destination
                    </div>
                </div>
    
                <div className="leftbottom">
                    <div className="mooncontainer">
                        <img src={"src"+destination.images.png} alt="moon" className="dmoon"/>
                    </div>
                </div>
                </div>

                main cha right content

                <div className="rightcontent">
                    
                <Destination_Navbar/>
    
                <div className="right_title">
                    {destination.name}
                </div>
                <div className="rightdesc">
                    {destination.description}
                </div>
                <hr/>
                <div className="rightestimationbox">
                    <div className="avgdistance">
                        <div className="avgtitle">
                            AVG. DISTANCE
                        </div>
                        <div className="avgnumber">
                            {destination.distance}
                        </div>
                    </div>
                    <div className="traveltime">
                        <div className="traveltitle">
                            EST. TRAVEL TIME
                        </div>
                        <div className="travelnumber">
                            {destination.travel}
                        </div>
                    </div>
                </div>
                </div>
            </main>)
        })} */}

        <main className="destination_main">
          {/* main cha leftcontent */}
          <div className="leftcontent">
            <div className="lefttop">
              <div className="leftnumber">01</div>
              <div className="lefttext">Pick your destination</div>
            </div>

            <div className="leftbottom">
              <div className="mooncontainer">
                <img
                  src={"src"+destination.images.png}
                  alt="moon"
                  className="dmoon"
                />
              </div>
            </div>
          </div>

          {/* main cha right content */}
          <div className="rightcontent">

            <Destination_Navbar />

            <div className="right_title">
                {destination.name}
                </div>
            <div className="rightdesc">
              {destination.description}
            </div>
            <hr />
            <div className="rightestimationbox">
              <div className="avgdistance">
                <div className="avgtitle">AVG. DISTANCE</div>
                <div className="avgnumber">
                    {destination.distance}</div>
              </div>
              <div className="traveltime">
                <div className="traveltitle">EST. TRAVEL TIME</div>
                <div className="travelnumber">{destination.travel}</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Destination;
