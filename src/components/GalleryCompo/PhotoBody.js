import React, { useState, useEffect } from 'react';
import Photo from "./Photo";
import one from './img/1.png';
import second from './img/2.png'
import third from './img/3.png'
import four from './img/4.png'
import five from './img/5.png'
import six from './img/6.png'
import RingLoader from "react-spinners/RingLoader";

const { GoogleSpreadsheet } = require('google-spreadsheet');

function PhotoBody() {
    const [data, setData] = useState([])

    const accessSpread = async () => {

        try {
            const creds = require('../client_secret.json'); // the file saved above
            const doc = new GoogleSpreadsheet('1XObBBFssSCgUnWuI4qEfjjzPcE2Na9rN_uRUhkB2glY');
            await doc.useServiceAccountAuth(creds);

            await doc.loadInfo(); // loads document properties and worksheets

            // append rows
            const sheet = doc.sheetsByIndex[4]
            // read rows
            const rows = await sheet.getRows();
            const temp = []


            for (let i = 0; i < rows.length; i++) {
                const data_row = {}
                data_row['Photo'] = rows[i].Photo
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
        <div className="limiter" style={!(data.length) ? { width: '60%' } : { width: '100%' }}>
            <div className="register-heading sectionHeading participants">
                ISM2021 Pictures (Zoom)
                <br/><br/>
            </div>

            {
                !(data.length) ?
                    (<div style={{ marginBottom: '30em', marginTop: '5em' }}>
                        <RingLoader color={'#00093c'} loading={true} css={''} size={150} />
                    </div>)

                    :

                    (<div>
                        <div className="photocontainer">
                            <div className="sectionHeading" style={{ textAlign: 'Center' }}>
                                Group Photos
                            </div>
                            <img src={one} alt="One" className="mphotos" />
                            <img src={second} alt="second" className="mphotos" />
                            <img src={third} alt='third' className="mphotos" />
                            <img src={four} alt='four' className="mphotos" />
                            <img src={five} alt='five' className="mphotos" />
                            <img src={six} alt='six' className="mphotos" />
                        </div>
                        <br/><br/>
                        <div className="photocontainer">
                            <div className="sectionHeading" style={{ textAlign: 'Center' }}>
                                Some Peeks into the Talks
                            </div>
                            {/*    here data will be updated*/}
                            {
                                data.map((value, index) => {
                                    return <Photo key={index}
                                        props={{ index: index, row: value }} />
                                })
                            }
                        </div>
                    </div>)
            }
        </div>
    )
}

export default PhotoBody;