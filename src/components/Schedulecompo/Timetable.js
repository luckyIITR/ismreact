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
                                    <td rowSpan="2"> Rajesh Gopakumar</td>
                                    <td> Sergei Gukov</td>
                                    <td > Ashoke Sen</td>
                                    <td rowSpan="3"> Free Morning</td>
                                    <td> Akshay Yelleshpur</td>
                                    <td> Sandipan Kundu</td>
                                </tr>
                                <tr>
                                    <th scope="row">10:00-10:30</th>
                                    <td>Sujay Ashok</td>
                                    <td>Shiraz Minwalla/his substitute</td>
                                    <td>Koushik Ray</td>
                                    <td>Pratik Rath</td>
                                </tr>
                                <tr>
                                    <th scope="row">10:30-11:00</th>
                                    <td>Chetan Krishnan</td>
                                    <td>Semanti Dutta</td>
                                    <td>Onkar Parrikar</td>
                                    <td>Arnab Rudra</td>
                                    <td>Joydeep Chakravarty</td>
                                </tr>
                                <tr style={{background: "rgba(229, 238, 244, 0.6)"}}>
                                    <th scope="row">11:00-11:30</th>
                                    <td colSpan="6">Tea Break</td>

                                </tr>
                                <tr>
                                    <th scope="row">11:30-12:00</th>
                                    <td>Anshuman Maharana</td>
                                    <td>Amitabh Virmani</td>
                                    <td>Yuji Tachikawa</td>
                                    <td rowSpan="5"> Free Morning</td>
                                    <td>Shamik Banerjee</td>
                                    <td>Jaydeep K. Basak</td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="2">12:00-12:30</th>
                                    <td > Suchetan Das</td>
                                    <td > Rajesh Gupta</td>
                                    <td > Sudip Karan</td>
                                    <td > Pranjal Pandey</td>
                                    <td > Akrajyoti Manna</td>
                                </tr>

                                <tr>
                                    <td > Arnab P. Saha</td>
                                    <td > Suman Kundu</td>
                                    <td > Mohammed Shabir</td>
                                    <td > Gourav Banerjee</td>
                                    <td > Sukrut Mondkar</td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="2">12:30-1:00pm</th>
                                    <td > Renjan R. John</td>
                                    <td > Ayan K. Patra</td>
                                    <td > Madhu Mishra</td>
                                    <td > V.Vishal</td>
                                    <td > Debordina Ghosh</td>
                                </tr>

                                <tr>
                                    <td > Anurag Kaushal</td>
                                    <td > Sabyasachi Maulik</td>
                                    <td > Trakshu Sharma</td>
                                    <td > Parthiv Haldar</td>
                                    <td > Akhil Sivakumar</td>
                                </tr>

                                <tr style={{background: "rgba(229, 238, 244, 0.6)"}}>
                                    <th scope="row">1:00-2:00pm</th>
                                    <td colSpan="6">Lunch Break</td>

                                </tr>
                                <tr>
                                    <th scope="row">2:00-2:30pm</th>
                                    <td>Abhishek Mehta</td>
                                    <td rowSpan="3"> Laura Donnay</td>
                                    <td>Bindusar Sahoo</td>
                                    <td>Shouvik Dutta</td>
                                    <td rowSpan="2"> Enrico Pajer</td>
                                    <td rowSpan="2"> Joao Penedones</td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="2">2:30-3:00pm</th>
                                    <td rowSpan="2">Arnab Kundu</td>
                                    <td rowSpan="2">Suresh Govindarajan</td>
                                    <td>Aritra Ghosh</td>
                                </tr>
                                <tr>
                                    <td>Debangshu Mukherjee</td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="2">3:00-3:30pm</th>
                                    <td rowSpan="2">Ayan Mukhopadhyay</td>
                                    <td rowSpan="2">Arindam Bhattacharjee</td>
                                    <td rowSpan="2">Chetan Gowdigere </td>
                                    <td>Naveen Prabhakar</td>
                                    <td rowSpan="2">Arpita Mitra</td>
                                    <td rowSpan="2">Parijat Dey</td>
                                </tr>
                                <tr>
                                    <td>Himanshu Parihar</td>
                                </tr>
                                <tr style={{background: "rgba(229, 238, 244, 0.6)"}}>
                                    <th scope="row">3:30-4:00</th>
                                    <td colSpan="6">Tea Break</td>
                                </tr>
                                <tr>
                                    <th scope="row">4:00-4:30</th>
                                    <td>Tadashi Takayanagi</td>
                                    <td>Mangesh Mandlik</td>
                                    <td>R. Loganayagam</td>
                                    <td>Rudranil Basu</td>
                                    <td>Sachin Jain</td>
                                    <td>Ronak Soni</td>
                                </tr>
                                <tr>
                                    <th scope="row">4:30-5:00</th>
                                    <td>Krishnan Narayan</td>
                                    <td>Aritra Banerjee</td>
                                    <td>Debajyoti Sarkar</td>
                                    <td>Nilay Kundu</td>
                                    <td rowSpan="2">Discussion session</td>
                                    <td>Siddharth Prabhu</td>
                                </tr>
                                <tr>
                                    <th scope="row">5:00-5:30</th>
                                    <td>Ahmadullah Zahed</td>
                                    <td>Kushal Chakraborty</td>
                                    <td>Karunava Sil</td>
                                    <td>Vijay Shenoy</td>
                                    <td>Aalok Misra</td>
                                </tr>
                                <tr>
                                    <th scope="row">5:30-6:00</th>
                                    <td rowSpan="2"> Discussion session</td>
                                    <td rowSpan="2"> Discussion session</td>
                                    <td >Zohar Komargodski</td>
                                    <td>Nathan Seiberg</td>
                                    <td> Lara Anderson</td>
                                    <td> Discussion session</td>
                                </tr>
                                <tr>
                                    <th scope="row">6:00-6:30</th>
                                    <td></td>
                                    <td>Break</td>
                                </tr>
                                <tr>
                                    <th scope="row">6:30-7:30</th>
                                    <td rowSpan="2"/>
                                    <td rowSpan="2"/>
                                    <td rowSpan="2"/>
                                    <td>Daniel Harlow</td>
                                    <td rowSpan="2">Davide Gaiotto</td>
                                    <td rowSpan="2"/>
                                </tr>
                                <tr>
                                    <th scope="row">7:30-8:00</th>
                                    <td>Ahmed Almheiri</td>
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
