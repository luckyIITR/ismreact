import React, { useState, useEffect } from 'react';
import ZoomRow from "./ZoomRow";
import RingLoader from "react-spinners/RingLoader";

const { GoogleSpreadsheet } = require('google-spreadsheet');

function ZoomBody() {
    const [data, setData] = useState([])

    const accessSpread = async () => {

        try {
            const creds = require('../client_secret.json'); // the file saved above
            const doc = new GoogleSpreadsheet('1XObBBFssSCgUnWuI4qEfjjzPcE2Na9rN_uRUhkB2glY');
            await doc.useServiceAccountAuth(creds);

            await doc.loadInfo(); // loads document properties and worksheets

            // append rows
            const sheet = doc.sheetsByIndex[2]
            // read rows
            const rows = await sheet.getRows();
            const temp = []


            for (let i = 0; i < rows.length; i++) {
                const data_row = {}
                data_row['Date'] = rows[i].Date
                data_row['RZoom'] = rows[i].RZoom
                data_row['RYouTube'] = rows[i].RYouTube
                data_row['OZoom'] = rows[i].OZoom
                data_row['OYouTube'] = rows[i].OYouTube
                data_row['DZoom'] = rows[i].DZoom
                data_row['DYouTube'] = rows[i].DYouTube
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
        <div className="limiter" style={!(data.length) ? {width : '60%'} : {width: '100%'} }>
            <div className="register-heading sectionHeading participants" style={{marginBottom:'-44px'}}>
                Zoom / Youtube Links
                <br/>
                <br/>
            </div>

            {
                !(data.length) ?
                    (<div style={{marginBottom: '30em', marginTop:'5em'}}>
                        <RingLoader color={'#00093c'} loading={true} css={''} size={150}/>
                    </div>)
                    :

                  (  <div className="container-table100">
                        <div className="wrap-table100" style={{height: 'auto'}}>
                            <div className="table">
                                <div className="header-table">
                                    <div className="cell">DATE</div>
                                    <div className="cell" style={{textAlign: 'center'}}>Pre-Lunch</div>
                                    <div className="cell" style={{textAlign: 'center'}}>Post-Lunch</div>
                                    <div className="cell" style={{textAlign: 'center'}}>Discussion Sessions</div>
                                </div>

                                {/*    here data will be updated*/}
                                {
                                    data.map((value, index) => {
                                        return <ZoomRow key={index}
                                                        props={{index: index, row: value}}/>
                                    })
                                }

                            </div>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default ZoomBody;
