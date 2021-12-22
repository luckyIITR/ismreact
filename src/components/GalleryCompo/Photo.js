import React from 'react';

function Photo(props) {
    return (
        <div >
            <img src={props.props.row.Photo} alt="" className="mphotos"/>
        </div>
    )
}
export default Photo;