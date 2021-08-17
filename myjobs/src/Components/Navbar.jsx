import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/navbar.css'

export default function Navbar() {
    return (
        <>
        
            <nav class="navbar">
                <div class="container">
                    <Link to="/" class="navbar-brand">My<span className="light-blue">Jobs</span></Link>
                    <Link to="/login" class="d-flex login">Login/Signup</Link>
                </div>
            </nav>
        </>
    )
}