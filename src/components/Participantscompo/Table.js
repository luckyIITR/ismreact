import React, {useState, useEffect} from 'react';
import RingLoader from "react-spinners/RingLoader";
import Row from "./Row";

const {GoogleSpreadsheet} = require('google-spreadsheet');


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

            for (let i = rows.length - 1; i >= 0; i--) {
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
    //
    // <th>S.No.</th>
    // <th>Name</th>
    // <th>Student/faculty</th>
    // <th>Institute</th>
    return (
        <div className="limiter">
            <div className="container-table100">
                <div className="wrap-table100">

                    {
                        !(data.length) ?

                            (
                                <RingLoader color={'#00093c'} loading={true} css={''} size={150}/>
                            )
                            :
                            (
                                <div className="table">
                                    <div className="row-table header">
                                        <div className="cell">
                                            S.No.
                                        </div>
                                        <div className="cell">
                                            Name
                                        </div>
                                        <div className="cell">
                                            Student/Faculty
                                        </div>
                                        <div className="cell">
                                            Institution
                                        </div>
                                    </div>
                                    {
                                        data.map((value, index) => {
                                            return <Row key={index}
                                                        props={{index: data.length - index - 1, row: value}}/>
                                        })
                                    }
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Table;
