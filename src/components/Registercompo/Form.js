import React from 'react';
import Footer from "../Homecompo/Footer";

function Form() {

    const google  = async (e) => {

        const btn = document.getElementById('btn');
        const btnText = document.getElementById('btnText');
        btnText.innerHTML = "Thanks";
        btn.classList.add('active');

        e.preventDefault()

        async function accessSpread(){

            const creds = require('../client_secret.json'); // the file saved above
            const doc = new GoogleSpreadsheet('1XObBBFssSCgUnWuI4qEfjjzPcE2Na9rN_uRUhkB2glY');
            await doc.useServiceAccountAuth(creds);

            await doc.loadInfo(); // loads document properties and worksheets
            console.log(doc.title);

            const sheet = doc.sheetsByIndex[0]
            const form = document.forms['google-sheet'];
            const formdata = new FormData(form);


            await sheet.addRow({ Name: formdata.get('Name'),
                Email: formdata.get('Email'),
                Institute:formdata.get('Institute') ,
                Post: formdata.get('Post') });
        }

        accessSpread()
        .then(response => {
                document.getElementById('name').value = ""
                document.getElementById('email').value = ""
                document.getElementById('institute').value = ""
                document.getElementById('post').value = 'DEFAULT'})
            .catch(error => console.error('Error!', error.message))

    }


    return (
        <div style={{background: "rgb(246 253 255)"}}>
            <div className="hero">
                <div className="register-heading sectionHeading">
                    <br/>
                        Register
                </div>
                <form method="post" autoComplete="off" name="google-sheet">
                    <div className="row-form">
                        <div className="input-group">
                            <input type="text" id="name" name="Name" required />
                                <label htmlFor="name"><i className="fas fa-user"> </i> Your Name</label>
                        </div>
                        <div className="input-group">
                            <input type="email" name="Email" id="email" required />
                                <label htmlFor="email"><i className="fas fa-envelope"> </i> Email Id</label>
                        </div>

                    </div>

                    <div className="input-group">
                        <input type="text" name="Institute" id="institute" required />
                            <label htmlFor="institute"><i className="fas fa-university"> </i> Institute</label>
                    </div>

                    <div className="input-group">
                        <select name="Post" id="cars" required>
                            <option value="DEFAULT" selected disabled>- Select a category -</option>
                            <option value="Student">Student</option>
                            <option value="Post Doc.">Post Doc.</option>
                            <option value="Faculty">Faculty</option>
                        </select>
                    </div>

                    <div className="hero-btn">
                        <button id="btn" type="submit" name="submit" value="Login">
                            <p id="btnText">Submit</p>
                            <div className="check-box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}
export default Form;
