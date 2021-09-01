import React from 'react';
import Logo from "./Homecompo/Logo";
import Nav from "./Homecompo/Nav";
import NocName from "./Noccompo/NocName";
import Footer from "./Homecompo/Footer";

function Noc() {
    return (
        <div >
            <Logo />
            <Nav props={{margin: "-50px 0 0 0"}}/>
            <NocName/>
            <Footer/>
        </div>
    )
}
export default Noc;
