import React from 'react'
import './Destination.css'
import Destination_Navbar from './Destination_Navbar'
import Header from '../Header'

const Mars = () => {
  return (
    <>
    <Header/>

    <main className='destination_main'>
            {/* main cha leftcontent */}
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
                <div className="mooncontainer ">
                    <img src="src/assets/distination/image-moon.png" alt="mars" className="dmoon"/>
                </div>
            </div>
            </div>

            {/* main cha right content */}
            <div className="rightcontent">
                
            <Destination_Navbar/>

            <div className="right_title">
              MARS
            </div>
            <div className="rightdesc">
            Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
            </div>
            <hr/>
            <div className="rightestimationbox">
                <div className="avgdistance">
                    <div className="avgtitle">
                        AVG. DISTANCE
                    </div>
                    <div className="avgnumber">
                      225 MIL. KM
                    </div>
                </div>
                <div className="traveltime">
                    <div className="traveltitle">
                        EST. TRAVEL TIME
                    </div>
                    <div className="travelnumber">
                      9 MONTHS
                    </div>
                </div>
            </div>
            </div>
    </main>
    </>
  )
}

export default Mars
