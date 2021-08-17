import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './CSS/form.css'

export default function SignIn() {

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [error, setError] = useState();

    const handleSubmit = () => {
        if(validate()) {
            console.log(email);
            console.log(pass);
        }
    }

    const emailRegex = /\S+@\S+\.\S+/;

    function validate(){
        if (email.length < 2 || pass.length < 1) {
            setError("Incorrect email or password")
        }else {
            return;
        }
    }




    return (
        <form className="main-body">
            <h3>Login</h3>
            <label htmlFor="Email address">Email address</label>
            <br />
            <input className="input-box py-2" type="text" placeholder="Enter your email" onChange={(e) => { setEmail(e.target.value) }} />

            <div className="d-flex py-2">
                <label htmlFor="Password" className="float-left">Password</label>

                <Link to='/forgot-pass' className=" link-form create-acc">Forgot password</Link>


            </div>

            <input className="input-box py-2" type="password" placeholder="Enter your password" onChange={(e) => { setPass(e.target.value) }} />
            <p className="error">{error}Incorrect Error</p>
            <div className="text-center">
                <button className="btn btn-primary px-4" onClick={handleSubmit}>Login</button>
            </div>
            <div className="form-end-div">
                <p className="new-job">New to jobs? </p>
                <Link to='/signup' className="link-form create-acc">Create an account</Link>
            </div>

        </form>
    )
}