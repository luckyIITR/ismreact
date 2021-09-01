import React from 'react';
import {Link} from 'react-router-dom'

function Nav(props) {
    return (
        <div className="stick">
            <div className="menuContainer" style={props.props}>
                <div className="menuWrapper" >
                    <nav id="navLinks">
                        <div className="nav-links">
                            <i className="fas fa-times"> </i>
                            <ul>
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/Register">REGISTER</Link></li>
                                <li><Link to="/Participants">PARTICIPANTS</Link></li>
                                <li><Link to="/Noc">NOC</Link></li>
                                <li><Link to="/Schedule">SCHEDULE et al</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Nav;
