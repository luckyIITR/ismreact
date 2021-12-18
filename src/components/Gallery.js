import React from 'react';
import Logo from "./Homecompo/Logo";
import Nav from "./Homecompo/Nav";
import Photo from "./GalleryCompo/Photo";

function Gallery() {
    return (
        <div >
            <Logo />
            <Nav props={{margin: "-50px 0 0 0"}}/>
            <Photo/>
        </div>
    )
}
export default Gallery;