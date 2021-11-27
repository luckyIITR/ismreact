import React from 'react';
import Logo from "./Homecompo/Logo";
import Nav from "./Homecompo/Nav";
import Aaloksir from "./Contactcomp/Aaloksir";
import Footer from "./Homecompo/Footer";

function Contact() {
    return (
        <div >
            <Logo />
            <Nav props={{margin: "-50px 0 0 0"}}/>
            <Aaloksir/>
            <Footer/>
        </div>
    )
}
export default Contact;
