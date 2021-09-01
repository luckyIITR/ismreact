import React from 'react';
import Logo from './Homecompo/Logo'
import Nav from './Homecompo/Nav'
import EventDetails from './Homecompo/EventDetails'
import TextBox from './Homecompo/TextBox'
import AboutIIT from './Homecompo/AboutIIT'
import Footer from './Homecompo/Footer'

function Home() {
  return (<div>
              <Logo />
              <Nav props={{margin: "-50px 0 -50px 0"}}/>
              <TextBox />
              <EventDetails />
              <AboutIIT />
              <Footer />
  </div>)
}
export default Home;