import React from 'react';
import Row from "./Row";
import Footer from "../Homecompo/Footer";

function Table() {
    const data = [{name:"Lucky Kushwaha", post: "Student", institute:'IIT Roorkee'},
        {name:"Mohak Patil", post: "Student", institute:'IIT Roorkee'},
        {name:"Mohak Patil", post: "Student", institute:'IIT Roorkee'},
        {name:"Lucky Kushwaha", post: "Student", institute:'IIT Roorkee'}]

    return (
        <div style={{background: "rgb(246 253 255)"}}>
            <div className="table-content">
                <div className="register-heading sectionHeading">
                    Participants
                    <br />
                        <br />
                </div>
                <div className="table">
                    <table>
                        <tr id="header">
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Student/faculty</th>
                            <th>Institute</th>
                        </tr>
                        {data.map((value, index) => {
                            return <Row key={index} props = {{index: index, row: value}} />
                        })}

                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Table;
