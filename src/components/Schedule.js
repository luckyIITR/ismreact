import React from 'react';
import Logo from "./Homecompo/Logo";
import Nav from "./Homecompo/Nav";
import Speakers from "./Schedulecompo/Speakers";
import Footer from "./Homecompo/Footer";
import Timetable from "./Schedulecompo/Timetable";

function Schedule() {
    return (
        <div >
            <Logo />
            <Nav props={{margin: "-50px 0 0 0"}}/>
            <Speakers/>
            <Timetable/>
            <Footer/>
        </div>
    )
}
export default Schedule;
