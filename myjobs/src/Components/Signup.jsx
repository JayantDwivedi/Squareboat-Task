import React from 'react';
import {Link} from 'react-router-dom'
import './CSS/form.css'


const Signup = () => {
    return (
        <>
            <form className="main-body">
                <h3>SignUp</h3>
                <p>I am a<sup>*</sup></p>
                <button className="btn btn-primary mx-3">Recruiter</button>
                <button className="btn btn-primary ms-3"><i className="fas fa-users"></i>Candidate</button>
                <br />
                <label htmlFor="text">Fullname<sup>*</sup></label>
                <input type="email" className="input-box py-2 my-3" placeholder="Enter your name" />
                <br />
                <label htmlFor="email">Email<sup>*</sup></label>
                <input type="email" className="input-box py-2 my-3" placeholder="Enter your email" />
                <br />
                <div className="d-flex">
                    <div>
                        <label htmlFor="password">Password<sup>*</sup></label>
                        <input type="password" className="input-box py-2 my-3" placeholder="Enter your password" />
                        <br />
                    </div>
                    <div>
                        <label htmlFor="password">Confirm password<sup>*</sup></label>
                        <input type="password" className="input-box py-2 my-3" placeholder="Enter your password" />
                        <br />
                    </div>
                </div>
                <label htmlFor="text">Skills<sup>*</sup></label>
                <input type="text" className="input-box py-2 my-3" placeholder="Enter your skills"/>
                <br />
                <p className="error">Error</p>
                <div className="form-end-div">
                <p className="new-job">New to jobs? </p>
                <Link to='/login' className="link-form create-acc">Login</Link>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary px-4">Signup</button>
                </div>

            </form>
        </>
    )
}

export default Signup;
