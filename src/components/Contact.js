import React from 'react';
import Logo from "./Homecompo/Logo";
import Nav from "./Homecompo/Nav";

function Contact() {
    return (
        <div >
            <Logo />
            <Nav props={{margin: "-50px 0 0 0"}}/>
        </div>
    )
}
export default Contact;
