import React from 'react';

function Row(props) {
    return (
        <div className="row-table">
            <div className="cell" data-title="Full Name">
                {props.props.index + 1}
            </div>
            <div className="cell" data-title="Age">
                {props.props.row.name}
            </div>
            <div className="cell" data-title="Job Title">
                {props.props.row.post}
            </div>
            <div className="cell" data-title="Location">
                {props.props.row.institute}
            </div>
        </div>
    )
}

export default Row;
