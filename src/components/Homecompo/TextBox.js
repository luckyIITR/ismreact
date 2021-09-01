import React from 'react';
import {Link} from "react-router-dom";

function TextBox() {
    return (
        <div className="cmsContainer">
            <div className="carouselContainer">
                <div className="ui slide slideFixed">

                    <div className="slide-holder">

                        <div className="carouselImage">
                            <div className="text-box">
                                <p id="iit">Indian Institute of Technology, Roorkee <br />presents</p>
                                <h1>Indian Strings Meeting 2021</h1>
                                <p id='text'>
                                    A biennial international conference of String theorists.
                                </p>
                                <Link to = '/Register' className={'btn'}>Register Now &#8594;</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default TextBox;
