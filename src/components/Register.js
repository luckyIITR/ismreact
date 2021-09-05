import React from 'react';
import Logo from './Homecompo/Logo'
import Nav from './Homecompo/Nav'
import Form from "./Registercompo/Form";
import Footer from "./Homecompo/Footer";
function Register() {
    return (
        <div >
            <Logo />
            <Nav props={{margin: "-50px 0 0 0"}}/>
            <Form/>
            <Footer/>
        </div>
    )
}
export default Register;
