import React from 'react';
import './table.scoped.css'
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
                                    <td rowSpan="2"> Rajesh Gopakumar (Dual of Free SYM)</td>
                                    <td> Sergei Gukov (Higher-form symmetries in TQFTs)</td>
                                    <td >Ashoke Sen (D-instanton corr. to string ampli.)</td>
                                    <td rowSpan="3"> Free Morning</td>
                                    <td> Akshay Yelleshpur (Deformed W algebras)</td>
                                    <td> Sandipan Kundu (Extremal Chaos)</td>
                                </tr>
                                <tr>
                                    <th scope="row">10:00-10:30</th>
                                    <td>Sujay Ashok (AdS3*S1 Chiral Ring)</td>
                                    <td>Shiraz Minwalla/his substitute (Hilbert space – Matter CS)</td>
                                    <td>Koushik Ray</td>
                                    <td>Pratik Rath (Tensor Networks and Holography)</td>
                                </tr>
                                <tr>
                                    <th scope="row">10:30-11:00</th>
                                    <td>Chetan Krishnan</td>
                                    <td>Semanti Dutta (Bulk Gauge Fields and Holographic RG)</td>
                                    <td>Onkar Parrikar (QEC in BH Interior)</td>
                                    <td>Arnab Rudra</td>
                                    <td>Joydeep Chakravarty (Monogamy, bags of gold paradoxes)</td>
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
                                    <td>Anshuman Maharana</td>
                                    <td>Amitabh Virmani (BH hair removal)</td>
                                    <td>Yuji Tachikawa (Intriligator-Seiberg Duality)</td>
                                    <td rowSpan="5"> Free Morning</td>
                                    <td>Shamik Banerjee</td>
                                    <td>Jaydeep K. Basak (Islands for EN)</td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="2">12:00-12:30</th>
                                    <td > Suchetan Das (Chaos)</td>
                                    <td > Rajesh Gupta</td>
                                    <td > Sudip Karan (Log. Corr. to ext.  BH entropy)</td>
                                    <td > Pranjal Pandey (Modified Celestial Amplitude)</td>
                                    <td > Akrajyoti Manna (Scatt. Ampl. Of massive vector bosons)</td>
                                </tr>

                                <tr>
                                    <td > Arnab P. Saha (Scattering)</td>
                                    <td > Suman Kundu (Bnds - Regge growth)</td>
                                    <td > Mohammed Shabir</td>
                                    <td > Gourav Banerjee (Log. Corr. to BH entropy)</td>
                                    <td > Sukrut Mondkar (Relax. Dyna.-semi-holog-black branes)</td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="2">12:30-13:00</th>
                                    <td > Renjan R. John (Anyon corr, CS)</td>
                                    <td > Ayan K. Patra (Page Curves and Bath Deformations)</td>
                                    <td > Madhu Mishra (R^2 Action)</td>
                                    <td > Aranya Bhattacharya (Islands,page curve,complex.)</td>
                                    <td > Debordina Ghosh</td>
                                </tr>

                                <tr>
                                    <td > Anurag Kaushal</td>
                                    <td > Sabyasachi Maulik (EE)</td>
                                    <td > Trakshu Sharma (Scattering AdS)</td>
                                    <td > Parthiv Haldar (QI to S-Matrix)</td>
                                    <td > Akhil Sivakumar (Fluct. Hydrodynamics)</td>
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
                                    <td>Abhishek Mehta (3d CFT corr)</td>
                                    <td rowSpan="3"> Laura Donnay (A celestial road to flat space holography)</td>
                                    <td>Bindusar Sahoo (Rudiments of SUGRA)</td>
                                    <td>Shouvik Dutta (Opr growth in 2D CFT)</td>
                                    <td rowSpan="2"> Enrico Pajer</td>
                                    <td rowSpan="2"> Joao Penedones (The S-matrix Bootstrap reloaded)</td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="2">14:30-15:00</th>
                                    <td rowSpan="2">Arnab Kundu</td>
                                    <td rowSpan="2">Suresh Govindarajan (Lie algebras from Umbral MS)</td>
                                    <td>Aritra Ghosh (Contact  Metr. Structures)</td>
                                </tr>
                                <tr>
                                    <td>Debangshu Mukherjee (2D drop. To 2D YM)</td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="2">15:00-15:30</th>
                                    <td rowSpan="2">Ayan Mukhopadhyay (Holog, entgmt)</td>
                                    <td rowSpan="2">Arindam Bhattacharjee (Matrix model with 3D BMS constraints)</td>
                                    <td rowSpan="2">Chetan Gowdigere (RCFT)</td>
                                    <td>Naveen Prabhakar</td>
                                    <td rowSpan="2">Arpita Mitra (Soft factors in small CC limit)</td>
                                    <td rowSpan="2">Parijat Dey (Bootstrapping BCFTs)</td>
                                </tr>
                                <tr>
                                    <td>Himanshu Parihar (Page Curve EN)</td>
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
                                    <td>Tadashi Takayanagi (dS holog)</td>
                                    <td>Mangesh Mandlik (Tensionless Tales: Critical Dimensions and Spectra)</td>
                                    <td>R. Loganayagam </td>
                                    <td>Rudranil Basu (Carrollian field theories)</td>
                                    <td>Sachin Jain (Momentum space-3d CFT corr. Func.)</td>
                                    <td>Ronak Soni (From Bekenstein-Hawking to Gibbons-Hawking)</td>
                                </tr>
                                <tr>
                                    <th scope="row">16:30-17:00</th>
                                    <td>Krishnan Narayan (Cosmo.,Singula. And QES)</td>
                                    <td>Aritra Banerjee</td>
                                    <td>Debajyoti Sarkar (Endpoint contribution to Modu. Hamiltonian)</td>
                                    <td>Nilay Kundu</td>
                                    <td rowSpan="2">Discussion session: Suvrat Raju</td>
                                    <td>Siddharth Prabhu</td>
                                </tr>
                                <tr>
                                    <th scope="row">17:00-17:30</th>
                                    <td>Ahmadullah Zahed (crssng sym)</td>
                                    <td>Kushal Chakraborty (Large N Knot Invariants)</td>
                                    <td>Karunava Sil (Pole Skipping and chaos)</td>
                                    <td>Vijay Shenoy (Fractons)</td>
                                    <td>Aalok Misra (Diff. Geo. Of Flavor Memory in M Theory at O(R^4))</td>
                                </tr>
                                <tr>
                                    <th scope="row">17:30-18:00</th>
                                    <td rowSpan="2"> Discussion session (Chair: Sandip Trivedi)</td>
                                    <td rowSpan="2"> Discussion session: Dileep Jatkar</td>
                                    <td >Zohar Komargodski (Line Dfcts and RG Flow)</td>
                                    <td>Nathan Seiberg (UV/IR mixing)</td>
                                    <td> Lara Anderson (SU(3) metr from ML)</td>
                                    <td> Discussion session (Chair: Jnandeva Maharana)</td>
                                </tr>
                                <tr>
                                    <th scope="row">18:00-18:30</th>
                                    <td> Discussion session: Sunil Mukhi</td>
                                    <td>Break</td>
                                    <td>Nemani Suryanarayana</td>
                                </tr>
                                <tr>
                                    <th scope="row">18:30-19:00</th>
                                    <td rowSpan="2"/>
                                    <td rowSpan="2"/>
                                    <td rowSpan="2">Daniel Harlow</td>
                                    <td>Ahmed Almheiri (Enganglement wedge of couplings)</td>
                                    <td rowSpan="2">Davide Gaiotto</td>
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
