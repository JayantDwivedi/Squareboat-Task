import React,{useState} from 'react';

import './CSS/form.css';

export default function ForgotPass() {

    const [email, setEmail] = useState();
    const [error, setError] = useState();

    const handleSubmit=()=>{
        if (!validate) {
            console.log(email);
        }
    }

    const validate=()=>{
        if (!(email.length < 20 || email == "")) {
            setError("Incorrect email");
            console.log("Validate")
        }
        else {
            return;
        }
    }

    return(
        <>
            <form className="main-body">
                <h3>Forgot Password?</h3>
                <p>Enter the email associated with your account and we'll send you instruction to reset your password</p>
                <label htmlFor="email">Email address</label>
                <br />
                <input type="email" className="input-box py-2 my-3" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}} />
                <br />
                <p className="error">{error}</p>
                <div className="text-center">
                <button className="btn btn-primary px-4" onClick={handleSubmit}>Submit</button>
                </div>
                
            </form>
        </>
    )
}