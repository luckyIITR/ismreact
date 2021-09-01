import React from 'react';

function EventDetails() {
    return (
        <div className="cmsContainer" id='eventdetails'>
            <div className="textArea noticeboard-upcoming-events-container">
                <div className="noticeboard-container">
                    <div className="sectionHeading">
                        Event Details
                    </div>
                    <div className="main-page-noticeboard">
                        <div className="row">

                            <div className="data">
                                The International Workshop ISM2021 is the Tenth in a series of biennial Indian Strings
                                Meetings, of which the first was held at Allahabad in December 2002;
                                <a href="http://theory.tifr.res.in/~ism04/">second</a> at Khajuraho, in December 2004;
                                third at Puri, in December 2006;
                                <a href="http://www.imsc.res.in/~ism08/index.html">fourth</a> at Pondicherry, in December 2008;
                                <a href="http://www.iopb.res.in/~ism2011/">fifth</a> in January 2011,
                                sixth in December 2012,
                                <a href="http://www.imsc.res.in/~ism14/index.html">seventh</a> in December 2014, at Puri;
                                <a href="https://www.iiserpune.ac.in/~ism16/">eighth</a> at IISER Pune in December 2016; and
                                ninth at IISER Thiravananthapuram in December 2018.
                                These meetings are jointly organized by the Indian string theory community.
                                The objective of these meetings is to stimulate expression of and discussion on new ideas
                                by young researchers and experts in string theory. Given the continuing global pandemic,
                                this year, ISM21 will be held in a completely online mode. The academic plan will comprise
                                review talks, research talks as well as focused discussion sessions.
                            </div>

                        </div>
                    </div>
                </div>
                <div className="upcoming-events-container">
                    <div className="sectionHeading">&nbsp;&nbsp;&nbsp;</div>
                    <div className="main-page-noticeboard">
                        <div className="row">
                            <div className="data">
                                <h3 style={{fontSize: "1.5em"}}>Meeting Dates<br /></h3>
                                <br />
                                December XX, 20XX to <br />
                                December XX, 20XX<br />
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventDetails;
