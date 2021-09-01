import React from 'react';

function Row(props) {
    return (
        <tr>
            <td>{props.props.index+ 1}</td>
            <td>{props.props.row.name}</td>
            <td>{props.props.row.post}</td>
            <td>{props.props.row.institute}</td>
        </tr>
    )
}
export default Row;
