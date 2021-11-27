import React from 'react';

const style_ele = {pointerEvents:"None"};

function Speaker(props) {
    return (
        <div className="main-page-noticeboard">
            <div className="row">
                <div className="data">
                    <div className="sch-row">
                        <div className="sch-col-1">
                            <p className="sch-name">
                                {
                                    props.props.page === "#/Schedule" ?
                                        <a href={props.props.page}
                                           rel="noopener noreferrer">{props.props.name}</a>
                                        :
                                        <a href={props.props.page} target={'_blank'}
                                           rel="noopener noreferrer">{props.props.name}</a>
                                }

                            </p>
                            <p>{props.props.institute}</p>

                            <div style={{marginTop: "0.5em"}}>
                                {
                                    props.props.time &&
                                    <div className="time"><i className="fas fa-clock"> </i>&nbsp; {props.props.time}</div>
                                }

                            </div>




                        </div>
                        {props.props.title &&
                        <div className="sch-col-2">

                                    <div style={{textAlign:"center",display: 'flex',justifyContent:"center", fontSize:"1.5rem", fontWeight:'bold', margin: "0.5em auto"}}>
                                        {props.props.title}

                                    </div>

                            <div style={{display: "flex", flexWrap: "wrap", justifyContent : "center"}}>

                                {
                                    props.props.youtube &&
                                    <div className="lect">
                                        <a className="ui button outline lifeAtIITRButton" href={props.props.youtube}
                                           target={'_blank'} rel="noopener noreferrer" style={props.props.youtube === "-"? style_ele : {}}><i
                                            className="fab fa-youtube"
                                            style={{color: "red"}}> </i>&nbsp;&nbsp; YouTube</a>
                                    </div>
                                }
                                {props.props.file &&

                                <div className="lect">
                                    <a className="ui button outline lifeAtIITRButton" href={props.props.file} target={'_blank'}
                                       rel="noopener noreferrer" style={props.props.file === "-"? style_ele : {}}><i
                                        className="fas fa-file-pdf"
                                        style={{color: "red"}}> </i>&nbsp;&nbsp; Talk File</a>
                                </div>
                                }
                            </div>

                        </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Speaker;
