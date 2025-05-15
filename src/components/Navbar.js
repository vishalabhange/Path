import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">PathFortune</div>
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/partners">Partners</a>
                <a href="/Training">Trainings</a>
                <a href="/Teams">Teams</a>
                <a href="/Photos">Gallery</a>
                <a href="/ContactUs">Contact</a>
            </nav>
        </header>
    );
}

export default Navbar;
