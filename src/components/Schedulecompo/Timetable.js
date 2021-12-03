import React from 'react';
import './table.scoped.css'
import {Link} from 'react-scroll'

function Timetable() {
    return (
        <section className="ftco-section">
            <div className="container-timetable container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">SCHEDULE</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-wrap">
                            <table className="table" style={{textAlign: "center", justifyContent: "center"}} id='#table-scroll'>
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
                                    <th scope="row" style={{fontWeight: "1000"}}>Session Chairs</th>
                                    <td style={{fontWeight: "1000"}}> Spenta Wadia</td>
                                    <td style={{fontWeight: "1000"}}>Ramadevi</td>
                                    <td style={{fontWeight: "1000"}}>Anirban Basu</td>
                                    <td/>
                                    <td style={{fontWeight: "1000"}}>Nabamita Banerjee</td>
                                    <td style={{fontWeight: "1000"}}>Harvendra Singh</td>
                                </tr>
                                <tr>
                                    <th scope="row">9:30-10:00</th>
                                    <td rowSpan="2"><Link to="Rajesh Gopakumar" smooth={true} duration={1000} offset={-150}>Rajesh Gopakumar</Link></td>
                                    <td><Link to="Sergei Gukov" smooth={true} duration={1000} offset={-150}>Sergei Gukov</Link></td>
                                    <td ><Link to="Ashoke Sen" smooth={true} duration={1000} offset={-150}>Ashoke Sen</Link></td>
                                    <td rowSpan="3"> Free Morning</td>
                                    <td><Link to="Akshay Yelleshpur Srikant" smooth={true} duration={1000} offset={-150}>Akshay Yelleshpur Srikant</Link></td>
                                    <td><Link to="Sandipan Kundu" smooth={true} duration={1000} offset={-150}>Sandipan Kundu</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">10:00-10:30</th>
                                    <td><Link to="Sujay Ashok" smooth={true} duration={1000} offset={-150}>Sujay Ashok</Link></td>
                                    <td><Link to="Shiraz Minwalla" smooth={true} duration={1000} offset={-150}>Shiraz Minwalla</Link></td>
                                    <td><Link to="Koushik Ray" smooth={true} duration={1000} offset={-150}>Koushik Ray</Link></td>
                                    <td><Link to="Pratik Rath" smooth={true} duration={1000} offset={-150}>Pratik Rath</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">10:30-11:00</th>
                                    <td><Link to="Chetan Krishnan" smooth={true} duration={1000} offset={-150}>Chetan Krishnan</Link></td>
                                    <td><Link to="Semanti Dutta" smooth={true} duration={1000} offset={-150}>Semanti Dutta</Link></td>
                                    <td><Link to="Onkar Parrikar" smooth={true} duration={1000} offset={-150}>Onkar Parrikar</Link></td>
                                    <td><Link to="Arnab Rudra" smooth={true} duration={1000} offset={-150}>Arnab Rudra</Link></td>
                                    <td><Link to="Joydeep Chakravarty" smooth={true} duration={1000} offset={-150}>Joydeep Chakravarty</Link></td>
                                </tr>
                                <tr style={{background: "rgba(229, 238, 244, 0.6)"}}>
                                    <th scope="row">11:00-11:30</th>
                                    <td colSpan="6">Tea Break</td>

                                </tr>
                                <tr>
                                    <th scope="row" style={{fontWeight: "1000"}}>Session Chairs</th>
                                    <td style={{fontWeight: "1000"}}>Shiroman Prakash</td>
                                    <td style={{fontWeight: "1000"}}>Chandrasekhar Bhamidipati</td>
                                    <td style={{fontWeight: "1000"}}>Bobby Ezhutachan</td>
                                    <td/>
                                    <td style={{fontWeight: "1000"}}>Sheshansu Seskhar Pal</td>
                                    <td style={{fontWeight: "1000"}}>Kamal Lochan Panigrahi</td>
                                </tr>
                                <tr>
                                    <th scope="row">11:30-12:00</th>
                                    <td><Link to="Anshuman Maharana" smooth={true} duration={1000} offset={-150}>Anshuman Maharana</Link></td>
                                    <td><Link to="Amitabh Virmani" smooth={true} duration={1000} offset={-150}>Amitabh Virmani</Link></td>
                                    <td><Link to="Yuji Tachikawa" smooth={true} duration={1000} offset={-150}>Yuji Tachikawa</Link></td>
                                    <td rowSpan="5"> Free Morning</td>
                                    <td><Link to="Partha Paul" smooth={true} duration={1000} offset={-150}>Partha Paul</Link></td>
                                    <td><Link to="Jaydeep Kumar Basak" smooth={true} duration={1000} offset={-150}>Jaydeep Kumar Basak</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="2">12:00-12:30</th>
                                    <td ><Link to="Suchetan Das" smooth={true} duration={1000} offset={-150}>Suchetan Das</Link> </td>
                                    <td ><Link to="Rajesh Gupta" smooth={true} duration={1000} offset={-150}>Rajesh Gupta</Link> </td>
                                    <td ><Link to="Sudip Karan" smooth={true} duration={1000} offset={-150}>Sudip Karan</Link> </td>
                                    <td ><Link to="Pranjal Pandey" smooth={true} duration={1000} offset={-150}>Pranjal Pandey</Link> </td>
                                    <td ><Link to="Akrajyoti Manna" smooth={true} duration={1000} offset={-150}>Akrajyoti Manna</Link> </td>
                                </tr>

                                <tr>
                                    <td > <Link to="Arnab P. Saha" smooth={true} duration={1000} offset={-150}>Arnab P. Saha</Link></td>
                                    <td > <Link to="Suman Kundu" smooth={true} duration={1000} offset={-150}>Suman Kundu</Link></td>
                                    <td > <Link to="Mohammed Shabir" smooth={true} duration={1000} offset={-150}>Mohammed Shabir</Link></td>
                                    <td > <Link to="Gourav Banerjee" smooth={true} duration={1000} offset={-150}>Gourav Banerjee</Link></td>
                                    <td > <Link to="Sukrut Mondkar" smooth={true} duration={1000} offset={-150}>Sukrut Mondkar</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="2">12:30-13:00</th>
                                    <td > <Link to="Renjan R. John" smooth={true} duration={1000} offset={-150}>Renjan R. John</Link></td>
                                    <td > <Link to="Ayan K. Patra" smooth={true} duration={1000} offset={-150}>Ayan K. Patra</Link></td>
                                    <td > <Link to="Madhu Mishra" smooth={true} duration={1000} offset={-150}>Madhu Mishra</Link></td>
                                    <td > <Link to="Aranya Bhattacharya" smooth={true} duration={1000} offset={-150}>Aranya Bhattacharya</Link></td>
                                    <td > <Link to="Debodirna Ghosh" smooth={true} duration={1000} offset={-150}>Debodirna Ghosh</Link></td>
                                </tr>

                                <tr>
                                    <td > <Link to="Anurag Kaushal" smooth={true} duration={1000} offset={-150}>Anurag Kaushal</Link></td>
                                    <td > <Link to="Sabyasachi Maulik" smooth={true} duration={1000} offset={-150}>Sabyasachi Maulik</Link></td>
                                    <td > <Link to="Trakshu Sharma" smooth={true} duration={1000} offset={-150}>Trakshu Sharma</Link></td>
                                    <td > <Link to="Parthiv Haldar" smooth={true} duration={1000} offset={-150}>Parthiv Haldar</Link></td>
                                    <td > <Link to="Akhil Sivakumar" smooth={true} duration={1000} offset={-150}>Akhil Sivakumar</Link></td>
                                </tr>

                                <tr style={{background: "rgba(229, 238, 244, 0.6)"}}>
                                    <th scope="row">13:00-14:00</th>
                                    <td colSpan="6">Lunch Break</td>

                                </tr>
                                <tr>
                                    <th scope="row" style={{fontWeight: "1000"}}>Session Chairs</th>
                                    <td style={{fontWeight: "1000"}}>Jyotirmoy Bhattacharya</td>
                                    <td style={{fontWeight: "1000"}}>Gautam Mandal</td>
                                    <td style={{fontWeight: "1000"}}>Supriya Kar</td>
                                    <td style={{fontWeight: "1000"}}>Prasanta Tripathy</td>
                                    <td style={{fontWeight: "1000"}}>Sudipta Mukherji</td>
                                    <td style={{fontWeight: "1000"}}>Aninda Sinha</td>
                                </tr>
                                <tr>
                                    <th scope="row">14:00-14:30</th>
                                    <td><Link to="Abhishek Mehta" smooth={true} duration={1000} offset={-150}>Abhishek Mehta</Link></td>
                                    <td rowSpan="3"> <Link to="Laura Donnay" smooth={true} duration={1000} offset={-150}>Laura Donnay</Link></td>
                                    <td><Link to="Bindusar Sahoo" smooth={true} duration={1000} offset={-150}>Bindusar Sahoo</Link></td>
                                    <td><Link to="Shouvik Datta" smooth={true} duration={1000} offset={-150}>Shouvik Datta</Link></td>
                                    <td rowSpan="2"><Link to="Enrico Pajer" smooth={true} duration={1000} offset={-150}>Enrico Pajer</Link> </td>
                                    <td rowSpan="2"><Link to="Joao Penedones" smooth={true} duration={1000} offset={-150}>Joao Penedones</Link> </td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="2">14:30-15:00</th>
                                    <td rowSpan="2"><Link to="Arnab Kundu" smooth={true} duration={1000} offset={-150}>Arnab Kundu</Link></td>
                                    <td rowSpan="2"><Link to="Suresh Govindarajan" smooth={true} duration={1000} offset={-150}>Suresh Govindarajan</Link></td>
                                    <td><Link to="Aritra Ghosh" smooth={true} duration={1000} offset={-150}>Aritra Ghosh</Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="Debangshu Mukherjee" smooth={true} duration={1000} offset={-150}>Debangshu Mukherjee</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="2">15:00-15:30</th>
                                    <td rowSpan="2"><Link to="Ayan Mukhopadhyay" smooth={true} duration={1000} offset={-150}>Ayan Mukhopadhyay</Link></td>
                                    <td rowSpan="2"><Link to="Arindam Bhattacharjee" smooth={true} duration={1000} offset={-150}>Arindam Bhattacharjee</Link></td>
                                    <td rowSpan="2"><Link to="Chetan Gowdigere" smooth={true} duration={1000} offset={-150}>Chetan Gowdigere </Link></td>
                                    <td><Link to="Naveen Prabhakar" smooth={true} duration={1000} offset={-150}>Naveen Prabhakar</Link></td>
                                    <td rowSpan="2"><Link to="Arpita Mitra" smooth={true} duration={1000} offset={-150}>Arpita Mitra</Link></td>
                                    <td rowSpan="2"><Link to="Parijat Dey" smooth={true} duration={1000} offset={-150}>Parijat Dey</Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="Himanshu Parihar" smooth={true} duration={1000} offset={-150}>Himanshu Parihar</Link></td>
                                </tr>
                                <tr style={{background: "rgba(229, 238, 244, 0.6)"}}>
                                    <th scope="row">15:30-16:00</th>
                                    <td colSpan="6">Tea Break</td>
                                </tr>
                                <tr>
                                    <th scope="row" style={{fontWeight: "1000"}}>Session Chairs</th>
                                    <td style={{fontWeight: "1000"}}>Sudhakar Panda</td>
                                    <td style={{fontWeight: "1000"}}>Sankhadeep Chakraborty</td>
                                    <td style={{fontWeight: "1000"}}>Sunil Mukhi</td>
                                    <td style={{fontWeight: "1000"}}>Debashis Ghoshal</td>
                                    <td style={{fontWeight: "1000"}}>Abhijit Gadde</td>
                                    <td style={{fontWeight: "1000"}}>Shibaji Roy</td>
                                </tr>
                                <tr>
                                    <th scope="row">16:00-16:30</th>
                                    <td><Link to="Tadashi Takayanagi" smooth={true} duration={1000} offset={-150}>Tadashi Takayanagi</Link></td>
                                    <td><Link to="Mangesh Mandlik" smooth={true} duration={1000} offset={-150}>Mangesh Mandlik</Link></td>
                                    <td><Link to="Loganayagam R" smooth={true} duration={1000} offset={-150}>R. Loganayagam</Link></td>
                                    <td><Link to="Rudranil Basu" smooth={true} duration={1000} offset={-150}>Rudranil Basu</Link></td>
                                    <td><Link to="Sachin Jain" smooth={true} duration={1000} offset={-150}>Sachin Jain</Link></td>
                                    <td><Link to="Ronak Soni" smooth={true} duration={1000} offset={-150}>Ronak Soni</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">16:30-17:00</th>
                                    <td><Link to="Krishnan Narayan" smooth={true} duration={1000} offset={-150}>Krishnan Narayan</Link></td>
                                    <td><Link to="Aritra Banerjee" smooth={true} duration={1000} offset={-150}>Aritra Banerjee</Link></td>
                                    <td><Link to="Debajyoti Sarkar" smooth={true} duration={1000} offset={-150}>Debajyoti Sarkar</Link></td>
                                    <td><Link to="Nilay Kundu" smooth={true} duration={1000} offset={-150}>Nilay Kundu</Link></td>
                                    <td rowSpan="2">Discussion session (Chair: Suvrat Raju)</td>
                                    <td><Link to="Siddharth Prabhu" smooth={true} duration={1000} offset={-150}>Siddharth Prabhu</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">17:00-17:30</th>
                                    <td><Link to="Ahmadullah Zahed" smooth={true} duration={1000} offset={-150}>Ahmadullah Zahed</Link></td>
                                    <td><Link to="Kushal Chakraborty" smooth={true} duration={1000} offset={-150}>Kushal Chakraborty</Link></td>
                                    <td><Link to="Karunava Sil" smooth={true} duration={1000} offset={-150}>Karunava Sil</Link></td>
                                    <td><Link to="Vijay Balakrishna Shenoy" smooth={true} duration={1000} offset={-150}>Vijay Balakrishna Shenoy</Link></td>
                                    <td><Link to="Aalok Misra" smooth={true} duration={1000} offset={-150}>Aalok Misra</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">17:30-18:00</th>
                                    <td rowSpan="2"> Discussion session (Chair: Sandip Trivedi)</td>
                                    <td rowSpan="2"> Discussion session (Chair: Dileep Jatkar)</td>
                                    <td ><Link to="Zohar Komargodski" smooth={true} duration={1000} offset={-150}>Zohar Komargodski</Link></td>
                                    <td><Link to="Nathan Seiberg" smooth={true} duration={1000} offset={-150}>Nathan Seiberg</Link></td>
                                    <td> <Link to="Lara Anderson" smooth={true} duration={1000} offset={-150}>Lara Anderson</Link></td>
                                    <td> Discussion session (Chair: Jnandeva Maharana)</td>
                                </tr>
                                <tr>
                                    <th scope="row">18:00-18:30</th>
                                    <td> Discussion session (Chair: Sunil Mukhi)</td>
                                    <td>Break</td>
                                    <td><Link to="Nemani Suryanarayana" smooth={true} duration={1000} offset={-150}>Nemani Suryanarayana</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">18:30-19:00</th>
                                    <td rowSpan="2"/>
                                    <td rowSpan="2"/>
                                    <td rowSpan="2"><Link to="Daniel Harlow" smooth={true} duration={1000} offset={-150}>Daniel Harlow</Link></td>
                                    <td><Link to="Ahmed Almheiri" smooth={true} duration={1000} offset={-150}>Ahmed Almheiri</Link></td>
                                    <td rowSpan="2"><Link to="Davide Gaiotto" smooth={true} duration={1000} offset={-150}>Davide Gaiotto</Link></td>
                                    <td rowSpan="2"/>
                                </tr>
                                <tr>
                                    <th scope="row">19:00-19:30</th>

                                </tr>
                                <tr>
                                    <th scope="row">19:30-20:00</th>

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
