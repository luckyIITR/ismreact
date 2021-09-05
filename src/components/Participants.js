import React from 'react';
import Logo from "./Homecompo/Logo";
import Nav from "./Homecompo/Nav";
import Table from "./Participantscompo/Table";
import Footer from "./Homecompo/Footer";

function Participants() {
    return (
        <div >
            <Logo />
            <Nav props={{margin: "-50px 0 0 0"}}/>
            <Table/>
            <Footer />
        </div>
    )
}
export default Participants;
