import React from 'react';

function ZoomRow(props) {

    return (
        <div className="row-table">
            <div className="cell" style={{fontWeight: "1000", paddingTop : '10px', paddingBottom:'10px'}} datatitle='Date'>{props.props.row.Date}
            </div>

            <div className='cell' datatitle="Pre-Lunch" style={{paddingTop : '10px', paddingBottom:'10px'}}>
                { (props.props.row.Date === '(Wednesday)') ?
                    (
                        <div style={{textAlign : 'center'}}>OFF</div>
                    )
                    :
                    (
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div className="lect">
                                <a className="ui button outline lifeAtIITRButton"
                                   href={props.props.row.RZoom}
                                   target={'_blank'}
                                   rel="noopener noreferrer">
                                    <i className="fas fa-video"
                                       style={{color: "blue"}}/>&nbsp;&nbsp; ZOOM</a>
                            </div>
                            <div className="lect">
                                <a className="ui button outline lifeAtIITRButton"
                                   href={props.props.row.RYouTube}
                                   target={'_blank'}
                                   rel="noopener noreferrer"><i
                                    className="fab fa-youtube"
                                    style={{color: "red"}}> </i>&nbsp;&nbsp; YouTube</a>
                            </div>
                        </div>
                    )
                }


            </div>
            <div className='cell' datatitle="Post-Lunch" style={{paddingTop : '10px', paddingBottom:'10px'}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="lect">
                        <a className="ui button outline lifeAtIITRButton"
                           href={props.props.row.OZoom}
                           target={'_blank'}
                           rel="noopener noreferrer">
                            <i className="fas fa-video"
                               style={{color: "blue"}}/>&nbsp;&nbsp; ZOOM</a>
                    </div>
                    <div className="lect">
                        <a className="ui button outline lifeAtIITRButton"
                           href={props.props.row.OYouTube}
                           target={'_blank'}
                           rel="noopener noreferrer"><i
                            className="fab fa-youtube"
                            style={{color: "red"}}> </i>&nbsp;&nbsp; YouTube</a>
                    </div>
                </div>

            </div>
            <div className='cell' datatitle="Discussion Session" style={{paddingTop : '10px', paddingBottom:'10px'}}>
                { (props.props.row.Date === 'Dec 15 (Wednesday)') ?
                    (
                        <div style={{textAlign : 'center'}}>OFF</div>
                    )
                    :
                    (
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div className="lect">
                                <a className="ui button outline lifeAtIITRButton"
                                   href={props.props.row.DZoom}
                                   target={'_blank'}
                                   rel="noopener noreferrer">
                                    <i className="fas fa-video"
                                       style={{color: "blue"}}/>&nbsp;&nbsp; ZOOM</a>
                            </div>
                            <div className="lect">
                                <a className="ui button outline lifeAtIITRButton"
                                   href={props.props.row.DYouTube}
                                   target={'_blank'}
                                   rel="noopener noreferrer"><i
                                    className="fab fa-youtube"
                                    style={{color: "red"}}> </i>&nbsp;&nbsp; YouTube</a>
                            </div>
                        </div>
                    )
                }


            </div>

        </div>
    )
}

export default ZoomRow;
