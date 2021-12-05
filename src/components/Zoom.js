import React from 'react';
import Logo from "./Homecompo/Logo";
import Nav from "./Homecompo/Nav";
import Footer from "./Homecompo/Footer";
import ZoomBody from "./Zoomcompo/ZoomBody";

function Zoom() {
    return (
        <div >
            <Logo />
            <Nav props={{margin: "-50px 0 0 0"}}/>
            <ZoomBody/>
            <Footer />
        </div>
    )
}
export default Zoom;
