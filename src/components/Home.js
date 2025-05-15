import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const HandleConnectUs = () => {
    navigate("/ContactUs");
  };
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="parallax-section bg1">
        <div className="overlay-First">
          <h1>PathFortune PVT LTD</h1>
          <p className="slogan">Path To Your Fortune</p>
          <button className="connect-btn" onClick={HandleConnectUs}>
            Connect Us
          </button>
        </div>
        <div className="overlay-First">
          <h1>PathFortune PVT LTD</h1>
          <p className="slogan">Path To Your Fortune</p>
          
        </div>
      </div>

      {/* What we offer */}
      <div className="content-section">
        <h2>Our Training Expertise</h2>
        <p>We provide industry-level, project-based training in:</p>
        <ul>
          <li>✅ Cybersecurity & Ethical Hacking</li>
          <li>✅ Data Science & AI/ML</li>
          <li>✅ Web Development (React, Node, Next.js)</li>
          <li>✅ Mobile App Development (Flutter, React Native)</li>
          <li>✅ Cloud Services (AWS, GCP, Azure)</li>
          <li>✅ DevOps & CI/CD Automation</li>
        </ul>
      </div>

      {/* Career Boost Section */}
      <div className="parallax-section bg2">
        <div className="overlay">
          <h2>Empowering Future Technologists</h2>
          <p>We don’t just teach — we build careers with confidence.</p>
        </div>
      </div>

      {/* About Company */}
      <div className="content-section">
        <h2>Why Choose PathFortune?</h2>
        <p>
          We are more than a training institute — we're your tech partner. With
          15+ partner companies, 30+ trainers, and 1000+ successful students, we
          provide a dynamic, real-world-ready learning experience. Our training
          modules are up-to-date with industry standards, and we help you get
          placed.
        </p>
      </div>

      {/* Digital Future Section */}
      <div className="parallax-section bg4">
        <div className="overlay">
          <h2>Build The Digital Future</h2>
          <p>
            Work with trending tech, real-time projects, and expert mentors.
          </p>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="content-section">
        <h2>We Are Different</h2>
        <ul>
          <li>✔ Live & Recorded Sessions</li>
          <li>✔ Internship + Placement Support</li>
          <li>✔ International Certification Programs</li>
          <li>✔ Hackathons, Projects, and Bootcamps</li>
        </ul>
      </div>

      {/* Final Motivation */}
      <div className="parallax-section bg3">
        <div className="overlay">
          <h2>Let’s Build Your Future, Together.</h2>
          <p>
            Join the PathFortune family today and take your first step toward a
            successful IT career.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
