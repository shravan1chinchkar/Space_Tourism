import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Destination.css"


const Destination_Navbar = () => {
  return (
    <>
    <nav className="rightnav">
        <ul className="rightul"> 
            <li className="rightli">
                <NavLink  id="moon" className="rightnavlinks defaultrightnavlinkunderline" to="/destination">MOON</NavLink>
            </li>

            <li className="rightli">
                <NavLink id="mars"  className="rightnavlinks" to="/destination/mars">MARS</NavLink>
            </li>

            <li className="rightli">
                <NavLink id="europa" className="rightnavlinks" to="/destination/europa">EUROPA</NavLink>
            </li>
                    
            <li className="rightli">
                <NavLink id="titan" className="rightnavlinks" to="/destination/titan">TITAN</NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Destination_Navbar
