import React from 'react';
import logo from '../images/logo2.png'
import {Link} from "react-router-dom";



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
