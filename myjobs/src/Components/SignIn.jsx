import React, { useState } from 'react';
import './CSS/form.css'

export default function SignIn() {

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const handleSubmit = () => {
        console.log(email);
        console.log(pass);
    }




    return (
        <form className="main-body">
            <h3>Login</h3>
            <label htmlFor="Email address">Email address</label>
            <br />
            <input className="input-box" type="text" placeholder="Enter your email" onChange={(e) => { setEmail(e.target.value) }} />
            <p className="error">Error para</p>
            <div className="d-flex">
                <label htmlFor="Password" className="d-flex float-left">Password</label>
                <p className="d-flex float-right">sdafds</p>
            </div>

            <input className="input-box" type="password" placeholder="Enter your password" onChange={(e) => { setPass(e.target.value) }} />
            <p className="error">Error Pass</p>
            <button className="btn btn-primary d-flex" onClick={handleSubmit}>Login</button>
            <div className="form-end-div">
                <p className="new-job">New to jobs? </p>
                <a className="link-form create-acc" href="https.www.google.com">Create an account</a>
            </div>

        </form>
    )
}