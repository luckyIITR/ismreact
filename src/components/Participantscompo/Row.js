import React from 'react';

function Row(props) {
    return (
        <div className="row-table">
            <div className="cell" data-title="S.No.">
                {props.props.index + 1}
            </div>
            <div className="cell" data-title="Name">
                {props.props.row.name}
            </div>
            <div className="cell" data-title="Student/Faculty">
                {props.props.row.post}
            </div>
            <div className="cell" data-title="Instiution">
                {props.props.row.institute}
            </div>
        </div>
    )
}

export default Row;
