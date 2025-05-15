import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>PathFortune PVT LTD</h3>
                <p>Your path to skill-building, innovation, and a successful tech career.</p>
                <a href="/AboutUs">AboutUs</a>
                <div className="footer-links">
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms & Conditions</a>
                    <a href="/">Support</a>
                </div>
                <p className="footer-copy">© {new Date().getFullYear()} PathFortune | All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
