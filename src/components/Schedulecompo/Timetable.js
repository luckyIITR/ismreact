import React from 'react';
import './table.scoped.css'
function Timetable() {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">SCHEDULE</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-wrap">
                            <table className="table" style={{textAlign: "center", justifyContent: "center"}}>
                                <thead className="thead-primary">
                                <tr>
                                    <th>Time</th>
                                    <th>Sun Dec 12</th>
                                    <th>Mon Dec 13</th>
                                    <th>Tue Dec 14</th>
                                    <th>Wed Dec 15</th>
                                    <th>Thu Dec 16</th>
                                    <th>Fri Dec 17</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">9:30-10:00</th>
                                    <td rowSpan="2"> Review talk</td>
                                    <td>Talk</td>
                                    <td rowSpan="2"> Review talk</td>
                                    <td rowSpan="3"> Free Morning</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                </tr>
                                <tr>
                                    <th scope="row">10:00-10:30</th>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                </tr>
                                <tr>
                                    <th scope="row">10:30-11:00</th>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                </tr>
                                <tr style={{background: "#b1e48c"}}>
                                    <th scope="row">11:00-11:30</th>
                                    <td colSpan="6">Tea Break</td>

                                </tr>
                                <tr>
                                    <th scope="row">11:30-12:00</th>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td rowSpan="3"> Free Morning</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                </tr>
                                <tr>
                                    <th scope="row">12:00-12:30</th>
                                    <td rowSpan="2"> Student talks</td>
                                    <td rowSpan="2"> Student talks</td>
                                    <td rowSpan="2"> Student talks</td>
                                    <td rowSpan="2"> Student talks</td>
                                    <td rowSpan="2"> Student talks</td>
                                </tr>
                                <tr>
                                    <th scope="row">1:00-2:00</th>
                                </tr>
                                <tr style={{background: "#b1e48c"}}>
                                    <th scope="row">2:00-2:30</th>
                                    <td colSpan="6">Lunch Break</td>

                                </tr>
                                <tr>
                                    <th scope="row">2:30-3:00</th>
                                    <td>Talk</td>
                                    <td rowSpan="2"> Review talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td rowSpan="2"> Review talk</td>
                                    <td rowSpan="2"> Review talk</td>
                                </tr>
                                <tr>
                                    <th scope="row">3:00-3:30</th>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                </tr>
                                <tr style={{background: "#b1e48c"}}>
                                    <th scope="row">3:30-4:00</th>
                                    <td colSpan="6">Tea Break</td>
                                </tr>
                                <tr>
                                    <th scope="row">4:00-4:30</th>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                </tr>
                                <tr>
                                    <th scope="row">4:30-5:00</th>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                </tr>
                                <tr>
                                    <th scope="row">5:00-5:30</th>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                    <td>Talk</td>
                                </tr>
                                <tr>
                                    <th scope="row">5:30-6:00</th>
                                    <td rowSpan="2"> Discussion session</td>
                                    <td rowSpan="2"> Discussion session</td>
                                    <td rowSpan="2"/>
                                    <td>Talk</td>
                                    <td rowSpan="2"> Discussion session</td>
                                    <td rowSpan="2"> Discussion session</td>
                                </tr>
                                <tr>
                                    <th scope="row">6:00-6:30</th>
                                    <td>Break</td>
                                </tr>
                                <tr>
                                    <th scope="row">6:30-7:30</th>
                                    <td rowSpan="2"/>
                                    <td rowSpan="2"/>
                                    <td rowSpan="2"/>
                                    <td>Review talk</td>
                                    <td rowSpan="2"/>
                                    <td rowSpan="2"/>
                                </tr>
                                <tr>
                                    <th scope="row">7:30-8:00</th>
                                    <td>Talk</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Timetable;
