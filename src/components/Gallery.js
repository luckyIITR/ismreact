import React from 'react';
import Logo from "./Homecompo/Logo";
import Nav from "./Homecompo/Nav";
import Footer from "./Homecompo/Footer";
import PhotoBody from "./GalleryCompo/PhotoBody";

function Gallery() {
    return (
        <div >
            <Logo />
            <Nav props={{margin: "-50px 0 0 0"}}/>
            <PhotoBody/>
            <Footer />
        </div>
    )
}
export default Gallery;
