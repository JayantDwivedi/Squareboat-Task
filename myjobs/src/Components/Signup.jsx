import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/form.css";

const Signup = () => {
  const url = "https://jobs-api.squareboat.info/api/v1/auth/register";

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [confirmpass, setConfirmpass] = useState();
  const [error, setError] = useState();
  const [skills, setSkills] = useState();

  const [recruiter, setRecruiter] = useState();

  const emailRegex = /\S+@\S+\.\S+/;

  const handleSubmit = () => {
    if (validation(name, email, pass, confirmpass, skills)) {
      //   alert(name + "," + email + "," + pass + "," + confirmpass + "," + skills);
      axios
        .post(url, {
          email: email,
          userRole: 0,
          password: pass,
          confirmPassword: confirmpass,
          name: name,
          skills: skills,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      setConfirmpass("");
      setPass("");
      setEmail("");
      setName("");
      setSkills("");
      setError("");
    }
  };

  const validation = (name, email, pass, confirmpass, skills) => {
    if (
      name === undefined ||
      name === "" ||
      email === undefined ||
      email === "" ||
      pass === undefined ||
      pass === "" ||
      confirmpass === undefined ||
      confirmpass === "" ||
      skills === undefined ||
      skills === ""
    ) {
      setError("All feild are mandatory");
    } else if (pass !== confirmpass) {
      setError("Both password must be same");
    } else {
      return true;
    }
  };

  return (
    <>
      <div className="main-body">
        <h3>SignUp</h3>
        <p>
          I am a<sup>*</sup>
        </p>
        <Link to="/signup" className="btn btn-primary mx-3 active">
          <i className="fas fa-search"></i>Recruiter
        </Link>
        <Link to="/candidate-signup" className="btn btn-primary ms-3">
          <i className="fas fa-users"></i>Candidate
        </Link>
        <br />
        <label htmlFor="text">
          Fullname<sup>*</sup>
        </label>
        <input
          type="text"
          className="input-box p-2 my-3 rounded"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="email">
          Email<sup>*</sup>
        </label>
        <input
          type="email"
          className="input-box p-2 my-3 rounded"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <div className="row">
          <div className="col-lg-5">
            <label htmlFor="password">
              Password<sup>*</sup>
            </label>
            <input
              type="password"
              className="input-box p-2 my-3 rounded"
              value={pass}
              placeholder="Enter your password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <br />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <label htmlFor="password">
              Confirm password<sup>*</sup>
            </label>
            <input
              type="password"
              className="input-box p-2 my-3 rounded"
              value={confirmpass}
              placeholder="Enter your password"
              onChange={(e) => {
                setConfirmpass(e.target.value);
              }}
            />
            <br />
          </div>
        </div>
        <label htmlFor="text">
          Skills<sup>*</sup>
        </label>
        <input
          type="text"
          className="input-box p-2 my-3 rounded"
          placeholder="Enter your skills"
          value={skills}
          onChange={(e) => {
            setSkills(e.target.value);
          }}
        />
        <br />
        <p className="error">{error}</p>
        <div className="form-end-div">
          <p className="new-job">New to jobs? </p>
          <Link to="/login" className="link-form create-acc">
            Login
          </Link>
        </div>
        <div className="text-center">
          <button className="btn btn-primary px-4" onClick={handleSubmit}>
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
