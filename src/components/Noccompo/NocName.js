import React from 'react';
import Member from "./Member";
function NocName() {

    const members = [{name: 'Abhijit Gadde', from:'TIFR, Mumbai', href: "https://main.tifr.res.in/maincampus/profile_page.php?c=b1FXei9TR3dHeXBra2VkMW04bGdlUT09"},
        {name:"Anshuman Maharana", from:" HRI, Allahabad", href:"https://www.hri.res.in/people/Physics/anshumanmaharana"},
        {name:"Ayan Mukhopadhyay", from:"IIT Madras", href:"https://physics.iitm.ac.in/ayan"},
        {name:"Bobby Ezuthachan", from:"RKMVERI, Belur Math", href:"http://physics.rkmvu.ac.in/bobby-ezhuthachan/"},
        {name:"Koushik Ray", from:"IACS, Kolkata", href:"http://iacs.res.in/faculty-profile.html?id=87"},
        {name:"Loganayagam R ", from:"ICTS, Bengaluru", href:"https://www.icts.res.in/people/loganayagam%7D"},
        {name:"Nabamita Banerjee", from:"IISER Bhopal", href:"http://www.iiserpune.ac.in/~nabamita/"},
        {name:"Sayantani Bhattacharya", from:"NISER, Jatni", href:"https://www.niser.ac.in/users/sayanta"},
        {name:"Shankadeep Chakrabortty", from:"IIT Ropar", href:"https://www.iitrpr.ac.in/physics/p/research.html?cat=0&id=63"},
        {name:"Shiroman Prakash", from:"Dayalbagh Educational Institute", href:"https://www.dei.ac.in/dei/science/index.php/phy-faculty/90-physicsfaculty/185-dr-shiroman-prakash"},
        {name:"Sunil Mukhi", from:"IISER PUNE", href:"https://www.iiserpune.ac.in/people/faculty-details/98"},
        {name:"Aalok Misra (Convener)", from:"IIT Roorkee", href:"https://www.iitr.ac.in/~PH/aalokfph"}]

    return (
        <div className="cmsContainer">
            <div className="textArea noticeboard-upcoming-events-container">
                <div className="NOC">
                    <div className="sectionHeading">
                        National organising Committee
                    </div>
                    {members.map((value, index) => {
                        return <Member key={index} props = {value} />
                    })}

                </div>

            </div>
        </div>
    )
}
export default NocName;
