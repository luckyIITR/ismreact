import React from 'react';
import Logo from './Homecompo/Logo'
import Nav from './Homecompo/Nav'
import Footer from "./Homecompo/Footer";
import RegClosed from "./Registercompo/RegClosed";
function Register() {
    return (
        <div >
            <Logo />
            <Nav props={{margin: "-50px 0 0 0"}}/>
            <RegClosed/>
            <Footer/>
        </div>
    )
}
export default Register;
