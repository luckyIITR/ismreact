import React from 'react';
import Footer from "../Homecompo/Footer";

function Form() {
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
