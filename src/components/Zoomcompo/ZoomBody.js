import React from 'react';

function ZoomBody() {
    return (
        <div>
            <div className="cmsContainer">
                <div className="textArea noticeboard-upcoming-events-container">
                    <div className="NOC">
                        <div className="sectionHeading">
                            Zoom Links
                        </div>
                        <div>
                            <div className="main-page-noticeboard">
                                <div className="row">
                                    <div className="data">
                                    {/*    THis is table */}

                                        <section className="ftco-section">
                                            <div className="container-timetable container">

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="table-wrap">
                                                            <table className="table" style={{textAlign: "center", justifyContent: "center"}} id='#table-scroll'>
                                                                <thead className="thead-primary">

                                                                <tr>
                                                                    <th>DATE</th>
                                                                    <th>Pre-Lunch</th>
                                                                    <th>Post-Lunch</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <th scope="row" style={{fontWeight: "1000"}}>Dec 12 (Sunday)</th>
                                                                    <td style={{fontWeight: "700"}}><a href="https://zoom.us/j/96435676200" target="_blank" rel="noreferrer">https://zoom.us/j/96435676200</a></td>
                                                                    <td style={{fontWeight: "700"}}><a href="https://zoom.us/j/98634309062" target="_blank" rel="noreferrer">https://zoom.us/j/98634309062</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row" style={{fontWeight: "1000"}}>Dec 13 (Monday)</th>
                                                                    <td style={{fontWeight: "700"}}><a href="https://zoom.us/j/99089366616" target="_blank" rel="noreferrer">https://zoom.us/j/99089366616</a></td>
                                                                    <td style={{fontWeight: "700"}}><a href="https://zoom.us/j/98173717217" target="_blank" rel="noreferrer">https://zoom.us/j/98173717217</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row" style={{fontWeight: "1000"}}>Dec 14 (Tuesday)</th>
                                                                    <td style={{fontWeight: "700"}}><a href="https://zoom.us/j/97119593707" target="_blank" rel="noreferrer">https://zoom.us/j/97119593707</a></td>
                                                                    <td style={{fontWeight: "700"}}><a href="https://zoom.us/j/91563443854" target="_blank" rel="noreferrer">https://zoom.us/j/91563443854</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row" style={{fontWeight: "1000"}}>Dec 15 (Wednesday)</th>
                                                                    <td style={{fontWeight: "700"}}>OFF</td>
                                                                    <td style={{fontWeight: "700"}}><a href="https://zoom.us/j/96217353874" target="_blank" rel="noreferrer">https://zoom.us/j/96217353874</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row" style={{fontWeight: "1000"}}>Dec 16 (Thursday)</th>
                                                                    <td style={{fontWeight: "700"}}><a href="https://zoom.us/j/97110643733" target="_blank" rel="noreferrer">https://zoom.us/j/97110643733</a></td>
                                                                    <td style={{fontWeight: "700"}}><a href="https://zoom.us/j/95165784768" target="_blank" rel="noreferrer">https://zoom.us/j/95165784768</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row" style={{fontWeight: "1000"}}>Dec 17 (Friday)</th>
                                                                    <td style={{fontWeight: "700"}}><a href="https://zoom.us/j/97534397264" target="_blank" rel="noreferrer">https://zoom.us/j/97534397264</a></td>
                                                                    <td style={{fontWeight: "700"}}><a href="https://zoom.us/j/92164697098" target="_blank" rel="noreferrer">https://zoom.us/j/92164697098</a></td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>


                                    {/*    Here table ends*/}

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

export default ZoomBody;
