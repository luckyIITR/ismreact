import React from 'react';
import Logo from "./Homecompo/Logo";
import Nav from "./Homecompo/Nav";
import Speaker from "./Schedulecompo/Speaker";

function Schedule() {
    return (
        <div >
            <Logo />
            <Nav props={{margin: "-50px 0 0 0"}}/>
            <Speaker/>
        </div>
    )
}
export default Schedule;
