import React from 'react';

function Row(props) {
    return (
        <div className="row-table">
            <div className="cell">
                {props.props.index + 1}
            </div>
            <div className="cell">
                {props.props.row.name}
            </div>
            <div className="cell">
                {props.props.row.post}
            </div>
            <div className="cell">
                {props.props.row.institute}
            </div>
        </div>
    )
}

export default Row;
