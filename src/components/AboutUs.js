import React from "react";
import "./AboutUs.css";

function Home() {
    return (
        <div className="AboutUs-container">
            <header className="hero-section">
                <h1>Welcome to PathFortune PVT LTD</h1>
                <p className="slogan">"Path To Your Fortune"</p>
                <button className="cta-button">Discover More</button>
            </header>

            <section className="company-info">
                <h2>About Us</h2>
                <p>
                    At <strong>PathFortune PVT LTD</strong>, we specialize in innovative solutions that empower businesses and individuals. 
                    Our expertise lies in delivering cutting-edge technology, transforming ideas into reality, and guiding our clients toward success.
                </p>
            </section>

            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to bridge the gap between technology and success by providing high-quality, scalable, and innovative solutions. 
                    We strive to create an ecosystem where businesses thrive and individuals achieve their goals effortlessly.
                </p>
            </section>

            <section className="services">
                <h2>Our Expertise</h2>
                <div className="service-cards">
                    <div className="service-card">
                        <h3>Software Development</h3>
                        <p>Crafting responsive and high-performance websites for businesses worldwide.</p>
                    </div>
                    <div className="service-card">
                        <h3>Training and Development</h3>
                        <p>Ensuring data security and providing robust protection against cyber threats.</p>
                    </div>
                    <div className="service-card">
                        <h3>Animation and VFX</h3>
                        <p>Transforming raw data into meaningful insights for smarter decision-making.</p>
                    </div>
                    <div className="service-card">
                        <h3>Media management</h3>
                        <p>Transforming raw data into meaningful insights for smarter decision-making.</p>
                    </div>
                </div>
            </section>

            <section className="contact">
                <h2>Get in Touch</h2>
                <p>Interested in working with us? Let’s collaborate and shape the future together.</p>
                <button className="cta-button">Contact Us</button>
            </section>
        </div>
    );
}

export default Home;