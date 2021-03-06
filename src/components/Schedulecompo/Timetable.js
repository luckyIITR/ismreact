import React from 'react';
import './table.scoped.css'
import { Link } from 'react-scroll'

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
                            <table className="table" style={{ textAlign: "center", justifyContent: "center" }} id='#table-scroll'>
                                <thead className="thead-primary">
                                    <tr>
                                        <th style={{ lineHeight: "0.8em" }}>Time<br /><i style={{ fontSize: "0.65em" }}>IST (UTC + 05:30)</i></th>
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
                                        <th scope="row" style={{ fontWeight: "1000" }}>Session Chairs</th>
                                        <td style={{ fontWeight: "1000" }}> Spenta Wadia</td>
                                        <td style={{ fontWeight: "1000" }}>Ramadevi</td>
                                        <td style={{ fontWeight: "1000" }}>Anirban Basu</td>
                                        <td />
                                        <td style={{ fontWeight: "1000" }}>Abhijit Gadde</td>
                                        <td style={{ fontWeight: "1000" }}>Harvendra Singh</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">09:30-10:00</th>
                                        <td rowSpan="2" ><Link to="Rajesh Gopakumar" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Inauguration <br />+<br /> Rajesh Gopakumar</Link></td>
                                        <td><Link to="Sergei Gukov" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Sergei Gukov</Link></td>
                                        <td ><Link to="Ashoke Sen" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Ashoke Sen</Link></td>
                                        <td rowSpan="4"> Free up to 12 noon</td>
                                        <td><Link to="Akshay Yelleshpur Srikant" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Akshay Yelleshpur Srikant</Link></td>
                                        <td><Link to="Sandipan Kundu" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Sandipan Kundu</Link></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10:00-10:30</th>
                                        <td><Link to="Sujay Ashok" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Sujay Ashok</Link></td>
                                        <td><Link to="Shiraz Minwalla" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Shiraz Minwalla</Link></td>
                                        <td><Link to="Koushik Ray" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Koushik Ray</Link></td>
                                        <td><Link to="Pratik Rath" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Pratik Rath</Link></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10:30-11:00</th>
                                        <td><Link to="Chethan Krishnan" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Chethan Krishnan</Link></td>
                                        <td><Link to="Semanti Dutta" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Semanti Dutta</Link></td>
                                        <td><Link to="Onkar Parrikar" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Onkar Parrikar</Link></td>
                                        <td><Link to="Arnab Rudra" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Arnab Rudra</Link></td>
                                        <td><Link to="Joydeep Chakravarty" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Joydeep Chakravarty</Link></td>
                                    </tr>
                                    <tr style={{ background: "rgba(229, 238, 244, 0.6)" }}>
                                        <th scope="row">11:00-11:30</th>
                                        <td colSpan="6">Tea Break</td>

                                    </tr>
                                    <tr>
                                        <th scope="row" style={{ fontWeight: "1000" }}>Session Chairs</th>
                                        <td style={{ fontWeight: "1000" }}>Shiroman Prakash</td>
                                        <td style={{ fontWeight: "1000" }}>Chandrasekhar Bhamidipati</td>
                                        <td style={{ fontWeight: "1000" }}>Supriya Kar</td>
                                        <td />
                                        <td style={{ fontWeight: "1000" }}>Sheshansu Seskhar Pal</td>
                                        <td style={{ fontWeight: "1000" }}>Kamal Lochan Panigrahi</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">11:30-12:00</th>
                                        <td><Link to="Anshuman Maharana" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Anshuman Maharana</Link></td>
                                        <td><Link to="Amitabh Virmani" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Amitabh Virmani</Link></td>
                                        <td><Link to="Yuji Tachikawa" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Yuji Tachikawa</Link></td>
                                        <td />
                                        <td><Link to="Partha Paul" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Partha Paul</Link></td>
                                        <td><Link to="Jaydeep Kumar Basak" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Jaydeep Kumar Basak</Link></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowSpan="2">12:00-12:30</th>
                                        <td ><Link to="Suchetan Das" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Suchetan Das</Link> </td>
                                        <td rowSpan="2"><Link to="Rajesh Gupta" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Rajesh Gupta</Link> </td>
                                        <td ><Link to="Sudip Karan" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Sudip Karan</Link> </td>
                                        <td rowSpan="4"><Link to="Nabamita Banerjee & Debashis Ghoshal" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Discussion session on Gender Imbalance in STEM</Link></td>
                                        <td ><Link to="Pranjal Pandey" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Pranjal Pandey</Link> </td>
                                        <td ><Link to="Arkajyoti Manna" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer" , color: "#1a76bb" }}>Arkajyoti Manna</Link> </td>
                                    </tr>

                                    <tr>
                                        <td > <Link to="Arnab P. Saha" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Arnab P. Saha</Link></td>
                                        <td > <Link to="Mohammed Shabir" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Mohammed Shabir</Link></td>
                                        <td > <Link to="Gourav Banerjee" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Gourav Banerjee</Link></td>
                                        <td > <Link to="Sukrut Mondkar" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb"  }}>Sukrut Mondkar</Link></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowSpan="2">12:30-13:00</th>
                                        <td > <Link to="Renjan R. John" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Renjan R. John</Link></td>
                                        <td > <Link to="Suman Kundu" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Suman Kundu</Link></td>

                                        <td > <Link to="Madhu Mishra" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Madhu Mishra</Link></td>
                                        <td > <Link to="Aranya Bhattacharya" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Aranya Bhattacharya</Link></td>
                                        <td > <Link to="Debodirna Ghosh" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb"  }}>Debodirna Ghosh</Link></td>
                                    </tr>

                                    <tr>
                                        <td > <Link to="Anurag Kaushal" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Anurag Kaushal</Link></td>
                                        <td > <Link to="Ayan K. Patra" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Ayan K. Patra</Link></td>

                                        <td > <Link to="Trakshu Sharma" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Trakshu Sharma</Link></td>
                                        <td > <Link to="Parthiv Haldar" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Parthiv Haldar</Link></td>
                                        <td > <Link to="Akhil Sivakumar" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb"  }}>Akhil Sivakumar</Link></td>
                                    </tr>

                                    <tr >
                                        <th scope="row" style={{ background: "rgba(229, 238, 244, 0.6)" }}>13:00-13:15</th>
                                        <td style={{ background: "rgba(229, 238, 244, 0.6)" }} />
                                        <td > <Link to="Sabyasachi Maulik" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Sabyasachi Maulik</Link></td>
                                        <td style={{ background: "rgba(229, 238, 244, 0.6)" }} colSpan="4" />

                                    </tr>
                                    <tr style={{ background: "rgba(229, 238, 244, 0.6)" }}>
                                        <th scope="row" style={{ background: "rgba(229, 238, 244, 0.6)" }}>13:15-14:00</th>
                                        <td />
                                        <td colSpan="6">Lunch Break</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" style={{ fontWeight: "1000" }}>Session Chairs</th>
                                        <td style={{ fontWeight: "1000" }}>Jyotirmoy Bhattacharya</td>
                                        <td style={{ fontWeight: "1000" }}>Nabamita Banerjee</td>
                                        <td style={{ fontWeight: "1000" }}>Bobby Ezhutachan</td>
                                        <td style={{ fontWeight: "1000" }}>Prasanta Tripathy</td>
                                        <td style={{ fontWeight: "1000" }}>Sudipta Mukherji</td>
                                        <td style={{ fontWeight: "1000" }}>Aninda Sinha</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">14:00-14:30</th>
                                        <td><Link to="Abhishek Mehta" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Abhishek Mehta</Link></td>
                                        <td rowSpan="3"> <Link to="Laura Donnay" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Laura Donnay</Link></td>
                                        <td><Link to="Bindusar Sahoo" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Bindusar Sahoo</Link></td>
                                        <td><Link to="Shouvik Datta" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Shouvik Datta</Link></td>
                                        <td rowSpan="3" />
                                        <td rowSpan="3"><Link to="Joao Penedones" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb"  }}>Joao Penedones</Link> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowSpan="2">14:30-15:00</th>
                                        <td rowSpan="2"><Link to="Arnab Kundu" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Arnab Kundu</Link></td>
                                        <td rowSpan="2"><Link to="Suresh Govindarajan" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Suresh Govindarajan</Link></td>
                                        <td><Link to="Aritra Ghosh" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Aritra Ghosh</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="Debangshu Mukherjee" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Debangshu Mukherjee</Link></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowSpan="2">15:00-15:30</th>
                                        <td rowSpan="2"><Link to="Ayan Mukhopadhyay" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Ayan Mukhopadhyay</Link></td>
                                        <td rowSpan="2"><Link to="Arindam Bhattacharjee" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Arindam Bhattacharjee</Link></td>
                                        <td rowSpan="2"><Link to="Chethan Gowdigere" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Chethan Gowdigere </Link></td>
                                        <td><Link to="Naveen Prabhakar" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Naveen Prabhakar</Link></td>
                                        <td rowSpan="2"><Link to="Arpita Mitra" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Arpita Mitra</Link></td>
                                        <td rowSpan="2"><Link to="Enrico Pajer" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Enrico Pajer</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="Himanshu Parihar" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Himanshu Parihar</Link></td>
                                    </tr>
                                    <tr style={{ background: "rgba(229, 238, 244, 0.6)" }}>
                                        <th scope="row">15:30-16:00</th>
                                        <td colSpan="6">Tea Break</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" style={{ fontWeight: "1000" }}>Session Chairs</th>
                                        <td style={{ fontWeight: "1000" }}>Sudhakar Panda</td>
                                        <td style={{ fontWeight: "1000" }}>Sankhadeep Chakraborty</td>
                                        <td style={{ fontWeight: "1000" }}>Sunil Mukhi</td>
                                        <td style={{ fontWeight: "1000" }}>Swapna Mahapatra</td>
                                        <td style={{ fontWeight: "1000" }}>Nabamita Banerjee</td>
                                        <td style={{ fontWeight: "1000" }}>Shibaji Roy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">16:00-16:30</th>
                                        <td><Link to="Tadashi Takayanagi" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Tadashi Takayanagi</Link></td>
                                        <td><Link to="Mangesh Mandlik" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Mangesh Mandlik</Link></td>
                                        <td><Link to="Loganayagam R" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>R. Loganayagam</Link></td>
                                        <td><Link to="Rudranil Basu" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Rudranil Basu</Link></td>
                                        <td><Link to="Sachin Jain" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Sachin Jain</Link></td>
                                        <td><Link to="Ronak Soni" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb"  }}>Ronak Soni</Link></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">16:30-17:00</th>
                                        <td><Link to="K. Narayan" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>K. Narayan</Link></td>
                                        <td><Link to="Aritra Banerjee" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Aritra Banerjee</Link></td>
                                        <td><Link to="Debajyoti Sarkar" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Debajyoti Sarkar</Link></td>
                                        <td><Link to="Nilay Kundu" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Nilay Kundu</Link></td>
                                        <td rowSpan="2"><Link to="Chair: Suvrat Raju" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Discussion session *(Chair: Suvrat Raju)</Link></td>
                                        <td><Link to="Siddharth Prabhu" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Siddharth Prabhu</Link></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">17:00-17:30</th>
                                        <td><Link to="Ahmadullah Zahed" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Ahmadullah Zahed</Link></td>
                                        <td><Link to="Kushal Chakraborty" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Kushal Chakraborty</Link></td>
                                        <td><Link to="Karunava Sil" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Karunava Sil</Link></td>
                                        <td><Link to="Vijay Balakrishna Shenoy" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Vijay Balakrishna Shenoy</Link></td>
                                        <td><Link to="Aalok Misra" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Aalok Misra</Link></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">17:30-18:00</th>
                                        <td rowSpan="2" style={{ color: "#1a76bb" }}><Link to="Chair : Jnandeva Maharana" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer" }}>Discussion session **(Chair: Jnandeva Maharana)</Link> </td>
                                        <td rowSpan="2"><Link to="Chair: Dileep Jatkar" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Discussion session (Chair: Dileep Jatkar)</Link></td>
                                        <td ><Link to="Zohar Komargodski" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Zohar Komargodski</Link></td>
                                        <td><Link to="Nathan Seiberg" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Nathan Seiberg</Link></td>
                                        <td> <Link to="Lara Anderson" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Lara Anderson</Link></td>
                                        <td> <Link to="Chair: Sandip Trivedi" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Discussion session (Chair: Sandip Trivedi)</Link></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">18:00-18:30</th>
                                        <td><Link to="Chair: Sunil Mukhi" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Discussion session (Chair: Sunil Mukhi)</Link></td>
                                        <td>Break</td>
                                        <td><Link to="Nemani Suryanarayana" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Nemani Suryanarayana</Link></td>
                                        <td rowSpan="2"><Link to="Davide Gaiotto" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Davide Gaiotto</Link></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">18:30-19:00</th>
                                        <td rowSpan="2" />
                                        <td rowSpan="2" />
                                        <td rowSpan="2"><Link to="Daniel Harlow" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Daniel Harlow</Link></td>
                                        <td><Link to="Ahmed Almheiri" smooth={true} duration={1000} offset={-150} style={{ cursor: "pointer", color: "#1a76bb" }}>Ahmed Almheiri</Link></td>
                                        <td rowSpan="2" />
                                    </tr>
                                    <tr>
                                        <th scope="row">19:00-19:30</th>

                                    </tr>
                                    <tr>
                                        <th scope="row" style={{ borderBottom: "2px solid black" }}>19:30-20:00</th>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style={{ marginTop: '1em', fontWeight: 'bold' }}>* Topic: Does the Hilbert space factorize in quantum gravity?</div>
                        <div style={{ marginTop: '1em', fontWeight: 'bold' }}>** Topic: Dispersion relation and analyticity in CFT.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Timetable;
