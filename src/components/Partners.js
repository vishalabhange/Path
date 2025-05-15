import React from "react";
import "./Partners.css";

import partner1 from "../Img/1.jpg";
import partner2 from "../Img/2.jpg";
import partner3 from "../Img/3.jpg";
import partner4 from "../Img/4.jpg";
import partner5 from "../Img/5.jpg";
import partner6 from "../Img/6.jpg";
import partner7 from "../Img/7.jpg";
import partner8 from "../Img/8.jpg";
import partner9 from "../Img/9.jpg";
import partner10 from "../Img/10.jpg";
import partner11 from "../Img/11.jpg";
import partner12 from "../Img/12.jpg";
import partner13 from "../Img/13.jpg";
import partner14 from "../Img/14.jpg";
import partner15 from "../Img/15.jpg";
import partner16 from "../Img/16.jpg";

const partners = [
    { name: "TechNova Solutions", logo: partner1, description: "Leading AI and cloud solutions provider." },
    { name: "CyberShield Security", logo: partner2, description: "Expert in cybersecurity and data protection." },
    { name: "DataViz Analytics", logo: partner3, description: "Transforming data into valuable insights." },
    { name: "SoftEdge Technologies", logo: partner4, description: "Innovative software development company." },
    { name: "CloudX Hosting", logo: partner5, description: "Reliable and scalable cloud hosting services." },
    { name: "AI Vision Labs", logo: partner6, description: "Revolutionizing AI-driven automation." },
    { name: "GreenTech Solutions", logo: partner7, description: "Sustainable and eco-friendly tech solutions." },
    { name: "Quantum Innovations", logo: partner8, description: "Pioneering in quantum computing research." },
    { name: "Infinity Softwares", logo: partner9, description: "Custom software development and consulting." },
    { name: "SecureNet Systems", logo: partner10, description: "Network security and penetration testing experts." },
    { name: "NeuralTech AI", logo: partner11, description: "Building smart AI-powered applications." },
    { name: "FinTech Boost", logo: partner12, description: "Financial technology solutions provider." },
    { name: "NextGen Robotics", logo: partner13, description: "Developing next-generation robotic systems." },
    { name: "MedTech Innovations", logo: partner14, description: "Healthcare technology and medical devices." },
    { name: "AutoSoft AI", logo: partner15, description: "Automotive AI and self-driving tech solutions." },
    { name: "AutoSoft AI", logo: partner16, description: "Automotive AI and self-driving tech solutions." }
];

function Partners() {
    return (
        <div className="partners-container">
            <h1>Our Trusted Partners</h1>
            <p>We are proud to collaborate with industry leaders and innovators.</p>
            <div className="partners-grid">
                {partners.map((partner, index) => (
                    <div key={index} className="partner-card">
                        <img src={partner.logo} alt={partner.name} />
                        <h3>{partner.name}</h3>
                        <p>{partner.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Partners;
