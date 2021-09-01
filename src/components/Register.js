import React from 'react';
import Logo from './Homecompo/Logo'
import Nav from './Homecompo/Nav'
import Form from "./Registercompo/Form";
function Register() {
    return (
        <div >
            <Logo />
            <Nav props={{margin: "-50px 0 0 0"}}/>
            <Form/>
        </div>
    )
}
export default Register;
