import React,{useState} from 'react';
import './CSS/form.css'

const ResetPass = () => {

    const [newpass, setNewpass] = useState();
    const [confirmpass, setConfirmpass] = useState();
    const [error, setError] = useState();

    const handleSubmit=()=>{

        console.log(newpass);
        console.log(confirmpass);

    }

    // onChange={(e)=>{setEmail(e.target.value)}}

    return(
        <>
            <form className="main-body">
                <h3>Reset Password</h3>
                <p>Enter your password below</p>
                <label htmlFor="pass">New password</label>
                <br />
                <input type="password" className="input-box py-2 my-3" placeholder="Enter your password" onChange={(e)=>{setNewpass(e.target.value)}} />
                <br />
                <label htmlFor="confirmpass">Confirm new password</label>
                <br />
                <input type="password" className="input-box py-2 my-3" placeholder="Enter your password" onChange={(e)=>{setConfirmpass(e.target.value)}} />
                <br />
                <p className="error">{error}</p>
                <div className="text-center">
                <button className="btn btn-primary px-4" onClick={handleSubmit}>Reset</button>
                </div>
            </form>
        </>
    )
}

export default ResetPass;
