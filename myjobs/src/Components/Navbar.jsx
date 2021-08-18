import React from "react";
import { Link } from "react-router-dom";
import "./CSS/navbar.css";
import { isLoggedin, removeUserSession } from "../utils/comman";

export default function Navbar() {
  return (
    <>
      <nav class="navbar">
        <div class="container">
          <Link to="/" class="navbar-brand">
            My<span className="light-blue">Jobs</span>
          </Link>
          {isLoggedin() ? (
            <Link to="/" class="d-flex">
              <button className="btn">Logout</button>
            </Link>
          ) : (
            <Link to="/login" class="d-flex">
              <button className="btn">Login/Signup</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
