import React from 'react';
import logo from '../images/logo2.png'
import {Link} from "react-router-dom";
import logo2 from '../images/175logo.jpeg'


function showMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0"
}



function Logo() {
    return (
        <div className="cmsContainer" id="initial-element">
            <div className="mainHeader">

                <div className="mainHeaderContent">
                    <Link to="/" ><img src={logo} alt="" className="logoImage" /></Link>
                    <Link to="/" ><img src={logo2} alt="" style={{"float": "right", "width":"250px", 'marginBottom':"22px", "maxWidth":"80%"}} /></Link>
                </div>
                <div className="menuHamburgerContainer">
                    <i className="fas fa-bars" onClick={showMenu}> </i>
                </div>

                <div className="divider dividerGrid"> </div>
            </div>
        </div>
    )
}
export default Logo;
