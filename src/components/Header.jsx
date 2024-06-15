import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Header = () => {
  return (
    // <!--header content  -->
    <header>
        {/* <!-- logo --> */}
        <div className="logocontainer">
            <img src="src/assets/shared/logo.svg" alt="logo" className="logo"/>
        </div>

        {/* <!-- hamburbger icon --> */}
        <img src="src/assets/shared/icon-hamburger.svg" alt="hamburger" className="hamburger"/>

        {/* <!-- horizontal line --> */}
        <div className="line"></div>
    
        {/* <!-- nav bar --> */}
        <nav className='mainnavbar'>
            <ul className="navul"> 
                <li>
                    <NavLink className="navlinks " id="h_navitem" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="navlinks" id="d_navitem"  to="/destination" >Destination</NavLink>
                </li>
                <li>
                    <NavLink className="navlinks"  id="c_navitem" to="/crew">Crew</NavLink>
                </li>
                <li>
                    <NavLink className="navlinks" id="t_navitem"  to="/technology">Technology</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
