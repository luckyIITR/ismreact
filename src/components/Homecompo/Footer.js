import React from 'react';
import iitrlogo from '../images/logo.png'
import ismlogo from '../images/Android - 1.png'

function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-1">
                    <img src={iitrlogo} alt="logo" />
                </div>

                <div className="col-2">
                    <h2>Indian Institute of Technology, Roorkee</h2>
                    <span>
                        Indian Strings Meeting 2021
                    </span>
                </div>

                <div className="col-3">
                    <a href="https://github.com/luckyIITR/ismreact" rel="noopener noreferrer" target="_blank" ><img src={ismlogo} alt="" className="logo2" /></a>
                    <div className="tooltip">
                        Designed and developed by Lucky, Shubham, Mohak.<br />
                        IMSc. Physics 2024, IIT Roorkee.
                    </div>
                </div>
            </div>
            <hr />
            <p className="copyright">&copy; Copyright 2021, IIT Roorkee</p><br />
        </div>
    )
}
export default Footer;
