import React from 'react';

function Speaker() {
    return (
        <div className="cmsContainer">
            <div className="textArea noticeboard-upcoming-events-container">
                <div className="NOC">
                    <div className="sectionHeading">
                        LECTURE TIMELINE
                    </div>
                    <div className="main-page-noticeboard">
                        <div className="row">
                            <div className="data">

                                <div className="sch-row">
                                    <div className="sch-col-1">
                                        <p className="sch-name">Ashoke Sen</p>
                                    </div>
                                    <div className="sch-col-2">
                                        <p className="time"><i className="fas fa-clock"> </i>&nbsp; Feb-16, 7:00 PM (IST)
                                            (UTC + 5:30)</p>
                                    </div>
                                </div>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sunt quisquam corrupti
                                    dignissimos doloribus voluptate nulla earum, est error ad?</p>
                                <div style={{display:"flex", flexWrap: "wrap"}}>
                                    <div className="lect">
                                        <a className="ui button outline lifeAtIITRButton" href="#" target={'_blank'}><i
                                            className="fas fa-file-pdf"
                                            style={{color: "red"}}> </i>&nbsp;&nbsp; Lecture File</a>
                                    </div>
                                    <div className="lect">
                                        <a className="ui button outline lifeAtIITRButton" href="#" target={'_blank'}><i
                                            className="fab fa-youtube"
                                            style={{color: "red"}}> </i>&nbsp;&nbsp; YouTube</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Speaker;
