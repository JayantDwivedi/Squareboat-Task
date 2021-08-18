import React, { useState } from "react";

import "./CSS/form.css";

export default function ForgotPass() {
  const [email, setEmail] = useState();
  const [error, setError] = useState();

  const emailRegex = /\S+@\S+\.\S+/;

  const handleSubmit = () => {
    if (validate(email)) {
      console.log(email);
      setEmail("");
      setError("");
    }
  };

  const validate = (email) => {
    if (email == undefined) {
      setError("");
      setError("Feild is mandatory");
    } else if (!emailRegex.test(email)) {
      setError("");
      setError("Enter a valid email");
    } else {
      return true;
    }
  };

  return (
    <>
      <div className="main-body">
        <h3>Forgot Password?</h3>
        <p>
          Enter the email associated with your account and we'll send you
          instruction to reset your password
        </p>
        <label htmlFor="email">
          Email address<sup>*</sup>
        </label>
        <br />
        <input
          value={email}
          type="email"
          className="input-box p-2 my-3 rounded"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <p className="error">{error}</p>
        <div className="text-center">
          <button className="btn btn-primary px-4" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
