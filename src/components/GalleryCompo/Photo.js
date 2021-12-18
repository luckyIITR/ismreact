import React from 'react';
import one from './img/1.jpeg';
import second from './img/2.jpeg'
import third from './img/3.jpeg'
import four from './img/4.jpeg'
import five from './img/5.jpeg'

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
            </div>
        </div>
    )
}
export default Photo;
