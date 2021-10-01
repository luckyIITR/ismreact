import React from 'react';

function Member(props) {
    return (
        <div className="main-page-noticeboard">
            <a href={props.props.href}
               target={"_blank"} rel="noopener noreferrer">
                <div className="row">
                    <div className="data">
                        <p className="name">{props.props.name}</p>
                        <div style={{fontSize:'0.9em'}}>{props.props.from}</div>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default Member;
