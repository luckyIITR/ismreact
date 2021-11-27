import React from 'react';
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function Row(props) {
    return (
        <div className="row-table">
            <div className="cell">
                {props.props.index + 1}
            </div>
            <div className="cell">
                {titleCase(props.props.row.name)}
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
