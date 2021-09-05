import React, { useState, useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";
import Row from "./Row";
const { GoogleSpreadsheet } = require('google-spreadsheet');


function Table() {

    const [data, setData] = useState([])
    const accessSpread = async () => {

        try {
            const creds = require('../client_secret.json'); // the file saved above
            const doc = new GoogleSpreadsheet('1XObBBFssSCgUnWuI4qEfjjzPcE2Na9rN_uRUhkB2glY');
            await doc.useServiceAccountAuth(creds);

            await doc.loadInfo(); // loads document properties and worksheets

            // append rows
            const sheet = doc.sheetsByIndex[0]
            // read rows
            const rows = await sheet.getRows();
            const temp = []

            for (let i = 0; i < rows.length; i++) {
                const data_row = {}
                data_row['name'] = rows[i].Name
                data_row['post'] = rows[i].Post
                data_row['institute'] = rows[i].Institute
                temp.push(data_row)
            }
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
        <div className="table-content">
            <div className="register-heading sectionHeading">
                Participants
                <br />
                <br />
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr id="header">
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Student/faculty</th>
                            <th>Institute</th>
                        </tr>
                    </thead>
                    {
                        !(data.length) ?

                            (
                                <tbody className="table" id='preloader' style={{ height: '30vh' }}>
                                    <RingLoader color={'#00093c'} loading={true} css={''} size={150} />
                                </tbody>
                            )
                            :
                            (
                                <tbody className="table" id='preloader'>
                                    {data.map((value, index) => {
                                        return <Row key={index} props={{ index: index, row: value }} />
                                    })}
                                </tbody>
                            )

                    }
                </table>
            </div>
        </div>
    )
}
export default Table;
