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
                                <p id="iit" style={{lineHeight:'normal'}}>Indian Institute of Technology, Roorkee <br/>
                                    (Department of Physics)<br />
                                    Presents</p>
                                <h1 style={{lineHeight:'normal'}}>Indian Strings Meeting 2021</h1>
                                <p id='text' style={{lineHeight:'normal'}}>
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
