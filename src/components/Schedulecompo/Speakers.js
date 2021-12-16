import React, { useState, useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";
import Speaker from "./Speaker";
import Discussion from "./Discussion";
const { GoogleSpreadsheet } = require('google-spreadsheet');

function SortNames(data) {
    for (let j = 0; j < data.length; j++) {
        let splited = data[j].name.split(" ")
        data[j]['last_name'] = splited[splited.length - 1]
    }

    function compareObjects(object1, object2, key) {
        const obj1 = object1[key].toUpperCase()
        const obj2 = object2[key].toUpperCase()

        if (obj1 < obj2) {
            return -1
        }
        if (obj1 > obj2) {
            return 1
        }
        return 0
    }

    data.sort((book1, book2) => {
        return compareObjects(book1, book2, 'last_name')
    })
}


function Speakers() {

    const [data, setData] = useState([])
    const accessSpread = async () => {

        try {
            const creds = require('../client_secret.json'); // the file saved above
            const doc = new GoogleSpreadsheet('1XObBBFssSCgUnWuI4qEfjjzPcE2Na9rN_uRUhkB2glY');
            await doc.useServiceAccountAuth(creds);

            await doc.loadInfo(); // loads document properties and worksheets

            // append rows
            const sheet = doc.sheetsByIndex[1]
            // read rows
            const rows = await sheet.getRows();
            const temp = []

            for (let i = 0; i < rows.length; i++) {
                const data_row = {}
                data_row['name'] = rows[i].Name
                data_row['page'] = rows[i].Page
                data_row['institute'] = rows[i].Institute
                data_row['time'] = rows[i].Time
                data_row['youtube'] = rows[i].Youtube
                data_row['file'] = rows[i].File
                data_row['talk'] = rows[i].Talk
                data_row['title'] = rows[i].Title
                temp.push(data_row)
            }
            SortNames(temp)

            setData(temp)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        accessSpread()
        // eslint-disable-next-line
    }, [])
    return (
        <div className="cmsContainer">
            <div className="textArea noticeboard-upcoming-events-container">
                <div className="NOC">
                    <div className="sectionHeading">
                        Speakers
                    </div>
                    {
                        !(data.length) ?
                            (<div style={{ marginBottom: '15em' }}>
                                <RingLoader color={'#00093c'} loading={true} css={''} size={150} />
                            </div>)
                            :
                            (<div>
                                <div style={{ marginTop: '1.5em', marginBottom: '0.5em', fontWeight: 'bold', fontSize: '1.5em' }}>Speakers of Review Talks (1 hour)</div>

                                {// eslint-disable-next-line
                                    data.map((value, index) => {
                                        if (value.talk === "Review")
                                            return <Speaker key={index} props={value} />
                                    })}
                                <div style={{ marginTop: '2em', marginBottom: '0.5em', fontWeight: 'bold', fontSize: '1.5em' }}>Speakers of Research Talks (30 minutes)</div>

                                {// eslint-disable-next-line
                                    data.map((value, index) => {
                                        if (value.talk === "Research")
                                            return <Speaker key={index} props={value} />
                                })}

                                <div style={{ marginTop: '2em', marginBottom: '0.5em', fontWeight: 'bold', fontSize: '1.5em' }}>Short Presentations</div>

                                {// eslint-disable-next-line
                                    data.map((value, index) => {
                                        if (value.talk === "Student")
                                            return <Speaker key={index} props={value} />
                                    })}

                                <div style={{ marginTop: '2em', marginBottom: '0.5em', fontWeight: 'bold', fontSize: '1.5em' }}>Discussion Sessions</div>

                                {// eslint-disable-next-line
                                    data.map((value, index) => {
                                        if (value.talk === "Discussion")
                                            return <Discussion key={index} props={value} />
                                    })}
                                <div style={{ marginTop: '1em', fontWeight: 'bold' }}>* to be confirmed</div>
                            </div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}
export default Speakers;

// const speakers_data = [{name:"Ashoke Sen", content:"This is the contect about the speaker it amet consectetur adipisicing elit. Omn", time:"Feb-16, 7:00 PM (IST) (UTC + 5:30)", lec_link:"", youtube_link:""},
    //                         ]
    // {name:"", content:"", time:"", lec_link:"", youtube_link:""}