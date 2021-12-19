import React from 'react';
import one from './img/1.png';
import second from './img/2.png'
import third from './img/3.png'
import four from './img/4.png'
import five from './img/5.png'
import six from './img/6.png'

function Photo() {
    return (
        <div >
            <div className="photocontainer">
                <div className="sectionHeading" style={{textAlign:'Center'}}>
                    ISM2021 Group Photos (Zoom)
                </div>
                <img src={one} alt="One" className="mphotos"/>
                <img src={second} alt="second" className="mphotos"/>
                <img src = {third} alt = 'third' className="mphotos"/>
                <img src = {four} alt = 'four' className="mphotos"/>
                <img src = {five} alt = 'five' className="mphotos"/>
                <img src = {six} alt = 'six' className="mphotos"/>
            </div>
        </div>
    )
}
export default Photo;
