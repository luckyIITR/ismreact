import React from 'react';

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
                            {(props.props.file || props.props.youtube) &&
                            <div style={{display: "flex", flexWrap: "wrap"}}>
                                <div className="lect">
                                    <a className="ui button outline lifeAtIITRButton" href={props.props.file} target={'_blank'}
                                       rel="noopener noreferrer"><i
                                        className="fas fa-file-pdf"
                                        style={{color: "red"}}> </i>&nbsp;&nbsp; Lecture File</a>
                                </div>
                                <div className="lect">
                                    <a className="ui button outline lifeAtIITRButton" href={props.props.youtube}
                                       target={'_blank'} rel="noopener noreferrer"><i
                                        className="fab fa-youtube"
                                        style={{color: "red"}}> </i>&nbsp;&nbsp; YouTube</a>
                                </div>
                            </div>
                            }

                        </div>
                        {props.props.time &&
                        <div className="sch-col-2">
                            <div style={{display: 'flex', justifyContent:"flex-end"}}>
                                <div className="time"><i className="fas fa-clock"> </i>&nbsp; {props.props.time}</div>
                            </div>
                            <br/>

                            {
                                props.props.title &&
                                    <div style={{textAlign:"center",display: 'flex',justifyContent:"center", fontSize:"1.5rem", fontWeight:'bold'}}>
                                        {props.props.title}
                                    </div>
                            }
                        </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Speaker;
