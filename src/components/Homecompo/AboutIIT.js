import React from 'react';

function AboutIIT() {
    return (
        <div className="cmsContainer containerInverted"  id='aboutiit'>
        <div className="textArea bufferContainer">
            <div className="sectionHeadingInverted" style={{fontSize: "1.6em"}}>About IIT Roorkee</div>

            <div className="listElement">

                <div className="listElementContent">
                    <div className="listElementHeader">
                        The Institute had celebrated its Sesquicentennial in October 1996 and will be celebrating
                        its 175th year of establishment during the period Nov 25th 2021 through Nov 24th 2022.
                        It was converted to IIT on September 21, 2001 by an Ordinance issued
                        by the Government of India declared it as the nation’s seventh Indian Institute of Technology,
                        an “Institution of National Importance”.
                        <br/>
                        <br/>
                        Indian Institute of Technology - Roorkee is among the foremost of institutes of national
                        importance in higher technological education and in engineering, basic and applied research.
                        Since its establishment, the Institute has played a vital role in providing the technical
                        manpower and know-how to the country and in pursuit of research. The Institute ranks amongst the
                        best technological institutions in the country
                        and has contributed to all sectors of technological
                        development. It has also been considered a trend-setter in the area of education and research in
                        the field of science, technology, and engineering.
                    </div>
                </div>
            </div>

            <a className="button buttonInverted bufferButton" href="https://iitr.ac.in/institute/pages/The_Institute.html"
                rel="noopener noreferrer" target="_blank" >
                Read More <span>&#8594;</span>
            </a>
        </div>
    </div>
    )
}
export default AboutIIT;
